interface HistoryState {
  title: string;
}
type Match = RegExp | ((path: string) => boolean) | string;
type RenderArgs = {
  currentPath: string;
  previousPath: string | null;
  state: HistoryState;
};
interface RouteArgs {
  currentPath: string;
  previousPath: string | null;
  state: HistoryState;
}
type OnEnterOrLeave = (args: RouteArgs) => void;

interface Listener {
  id: number;
  match: Match;
  onEnter?: OnEnterOrLeave;
  onLeave?: OnEnterOrLeave;
}

function Router() {
  let listeners: Listener[] = [];
  // eslint-disable-next-line no-restricted-globals
  let currentPath: string = location.pathname;
  let previousPath: string | null = null;

  const isMatch = (match: Match, path: string): boolean =>
    (match instanceof RegExp && match.test(path)) ||
    (typeof match === "function" && match(path)) ||
    (typeof match === "string" && match === path);

  const handleListener = ({ match, onEnter, onLeave }: Listener): void => {
    // eslint-disable-next-line no-restricted-globals
    const args: RouteArgs = { currentPath, previousPath, state: history.state };

    if (previousPath !== null && isMatch(match, previousPath)) {
      if (onLeave) {
        onLeave(args);
      }
    }

    if (isMatch(match, currentPath) && onEnter) {
      onEnter(args);
    }
  };

  const handleAllListeners = () => listeners.forEach(handleListener);

  const generateId = (): number => {
    const getRandomNumber = (): number =>
      Math.floor(Math.random() * listeners.length * 1000);
    const doesExist = (id: number): boolean =>
      listeners.some((listener) => listener.id === id);

    let id = getRandomNumber();
    while (doesExist(id)) {
      id = getRandomNumber();
    }
    return id;
  };

  const on = (
    match: Match,
    onEnter?: OnEnterOrLeave,
    onLeave?: OnEnterOrLeave
  ): (() => void) => {
    const id = generateId();

    const listener: Listener = { id, match, onEnter, onLeave };
    listeners.push(listener);
    handleListener(listener);

    return (): void => {
      listeners = listeners.filter((l) => l.id !== id);
    };
  };

  const go = (url: string, state?: HistoryState): void => {
    previousPath = currentPath;
    // eslint-disable-next-line no-restricted-globals
    history.pushState(state, "", url);
    // eslint-disable-next-line no-restricted-globals
    currentPath = location.pathname;

    handleAllListeners();
  };

  window.addEventListener("popstate", handleAllListeners);

  return { on, go };
}

// USAGE
const createRender = (content: string) => (args: RenderArgs) => {
  // eslint-disable-next-line no-console
  console.info(`${content} args=${JSON.stringify(args)}`);
  const rootElement = document.getElementById("root");
  if (rootElement) {
    rootElement.innerHTML = `<h2>${content}</h2>`;
  }
};

const createLogger =
  (content: string) =>
  (args: RenderArgs): void => {
    // eslint-disable-next-line no-console
    console.info(`${content} args=${JSON.stringify(args)}`);
  };

const router = Router();

const unsubscriber = router.on(/.*/, createRender("/.*"));
router.on((path) => path === "/contacts", createRender("/contacts"));
router.on("/about", createRender("/about"), createLogger("[leaving] /about"));
router.on("/about/us", createRender("/about/us"));

document.body.addEventListener("click", (event: Event): void => {
  const target = event.target as HTMLElement;
  if (!target.matches("a")) {
    return;
  }
  event.preventDefault();
  const url = target.getAttribute("href");
  if (url) {
    router.go(url);
    unsubscriber();
  }
});
