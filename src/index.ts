type RouterMode = "hash" | "history";

interface HistoryState {
  title: string;
}
type Match = RegExp | string | ((path: string) => boolean);
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

type AsyncRouteHandler = (args: RouteArgs) => Promise<void> | void;

interface Listener {
  id: number;
  match: Match;
  onBeforeEnter?: AsyncRouteHandler;
  onEnter?: AsyncRouteHandler;
  onLeave?: AsyncRouteHandler;
}

export class Router {
  private routes: Listener[] = [];

  private mode: RouterMode;

  private currentPath: string = "";

  private previousPath: string | null = null;

  constructor(mode: RouterMode = "hash") {
    this.mode = mode;
    this.currentPath = this.getFragment();
    window.addEventListener(
      this.mode === "hash" ? "hashchange" : "popstate",
      () => this.handleRouteChange()
    );

    this.adjustLinksForGHPages();
  }

  // eslint-disable-next-line class-methods-use-this
  public adjustLinksForGHPages(): void {
    if (PRODUCTION) {
      const PREFIX = "/otus-SPA-turarov-2023";
      document.querySelectorAll("a").forEach((link) => {
        const modifiedLink = link;
        modifiedLink.href = PREFIX + link.pathname;
      });
    }
  }

  public getFragment(): string {
    if (this.mode === "history") {
      return decodeURI(window.location.pathname + window.location.search);
    }
    return window.location.hash.slice(1);
  }

  public async handleRouteChange(): Promise<void> {
    this.previousPath = this.currentPath;
    this.currentPath = this.getFragment();

    const args: RouteArgs = {
      currentPath: this.currentPath,
      previousPath: this.previousPath,
      // eslint-disable-next-line no-restricted-globals
      state: history.state,
    };
    // eslint-disable-next-line no-restricted-syntax
    for (const route of this.routes) {
      if (Router.isMatch(route.match, this.currentPath)) {
        if (route.onBeforeEnter)
          // eslint-disable-next-line no-await-in-loop
          await route.onBeforeEnter(args);
        if (route.onEnter)
          // eslint-disable-next-line no-await-in-loop
          await route.onEnter(args);
      }
      if (this.previousPath && Router.isMatch(route.match, this.previousPath)) {
        if (route.onLeave)
          // eslint-disable-next-line no-await-in-loop
          await route.onLeave(args);
      }
    }
  }

  public static isMatch(match: Match, path: string): boolean {
    if (typeof match === "function") {
      return match(path);
    }
    if (match instanceof RegExp) {
      return match.test(path);
    }
    return match === path;
  }

  public on(
    match: RegExp | string | ((path: string) => boolean),
    onEnter?: AsyncRouteHandler,
    onLeave?: AsyncRouteHandler,
    onBeforeEnter?: AsyncRouteHandler
  ): () => void {
    const id = this.generateId();
    const listener: Listener = { id, match, onBeforeEnter, onEnter, onLeave };
    this.routes.push(listener);

    return (): void => {
      this.routes = this.routes.filter((l) => l.id !== id);
    };
  }

  // eslint-disable-next-line class-methods-use-this
  public createRender(content: string): (args: RenderArgs) => void {
    return (args: RenderArgs) => {
      // eslint-disable-next-line no-console
      console.info(`${content} args=${JSON.stringify(args)}`);
      const rootElement = document.getElementById("root");
      if (rootElement) {
        rootElement.innerHTML = `<h2>${content}</h2>`;
      }
    };
  }

  // eslint-disable-next-line class-methods-use-this
  public createLogger(): (args: RouteArgs) => void {
    return (args: RouteArgs): void => {
      // eslint-disable-next-line no-console
      console.info(`[leaving] args=${JSON.stringify(args)}`);
    };
  }

  // eslint-disable-next-line class-methods-use-this
  public someBeforeEnter(content: string): (args: RouteArgs) => Promise<void> {
    return async (args: RouteArgs): Promise<void> => {
      // eslint-disable-next-line no-console
      console.log(`Before entering, args: ${JSON.stringify(args)}`);
      if (args.currentPath === content) {
        const rootElement = document.getElementById("root");
        if (rootElement) {
          const newElement = document.createElement("div");
          newElement.innerHTML = `<h2>BeforeEnter: ${content}</h2>`;
          rootElement.appendChild(newElement);
        }
      }
    };
  }

  public generateId(): number {
    const getRandomNumber = (): number =>
      Math.floor(Math.random() * this.routes.length * 1000);

    const doesExist = (id: number): boolean =>
      this.routes.some((route) => route.id === id);

    let id = getRandomNumber();
    while (doesExist(id)) {
      id = getRandomNumber();
    }
    return id;
  }

  public async navigate(path: string, state?: HistoryState): Promise<void> {
    if (this.mode === "history") {
      window.history.pushState(state, "", path);
    } else {
      window.location.hash = path;
    }
    await this.handleRouteChange();
  }
}

const router = new Router("history");
const unsubscriber = router.on(/.*/, router.createRender("/.*"));
// router.on((path) => path === "/contacts", router.createRender("/contacts"));
router.on(
  "/about",
  router.someBeforeEnter("/about"),
  router.createRender("/about"),
  router.createLogger()
);
router.on("/contacts", router.createRender("/contacts"), router.createLogger());
router.on("/login", router.createRender("/login"), router.createLogger());
router.on("/about/us", router.createRender("/about/us"), router.createLogger());

// if (PRODUCTION) {
//   document.querySelectorAll("a").forEach((link) => {
//     const modifiedLink = link;
//     modifiedLink.href = PREFIX + link.pathname;
//   });
// }

document.body.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.matches("a")) {
    event.preventDefault();
    const url = target.getAttribute("href");
    if (url) {
      router.navigate(url);
      unsubscriber();
    }
  }
});

export default Router;
