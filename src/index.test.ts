import { Router } from "./index";

describe("Router hash", () => {
  let router: Router;
  let mockAddEventListener: jest.SpyInstance;

  beforeEach(() => {
    mockAddEventListener = jest.spyOn(window, "addEventListener");
    router = new Router("hash");
  });

  afterEach(() => {
    mockAddEventListener.mockRestore();
  });

  it("should initialize correctly with hash mode", () => {
    expect(router).toBeDefined();
    expect(mockAddEventListener).toHaveBeenCalledWith(
      "hashchange",
      expect.any(Function)
    );
  });
});

describe("Router history", () => {
  let router: Router;
  const mockOnBeforeEnter = jest.fn();
  const mockOnEnter = jest.fn();
  const mockOnLeave = jest.fn();

  beforeEach(() => {
    router = new Router("history");
    jest.spyOn(router, "getFragment").mockReturnValue("/test");
    router.on("/test", mockOnEnter, mockOnLeave, mockOnBeforeEnter);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call onBeforeEnter, onEnter for the current route", async () => {
    await router.handleRouteChange();

    expect(mockOnBeforeEnter).toHaveBeenCalled();
    expect(mockOnEnter).toHaveBeenCalled();
    expect(mockOnLeave).not.toHaveBeenCalled();
  });
});

describe("Router createRender", () => {
  let router: Router;
  let rootElement: HTMLElement;

  beforeEach(() => {
    router = new Router("history");
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    document.body.removeChild(rootElement);
  });

  it("should update root element innerHTML with content", () => {
    const render = router.createRender("Test Content");
    render({
      currentPath: "/test",
      previousPath: null,
      state: { title: "Test" },
    });

    expect(rootElement.innerHTML).toBe("<h2>Test Content</h2>");
  });
});

describe("Router someBeforeEnter", () => {
  let router: Router;
  let rootElement: HTMLElement;

  beforeEach(() => {
    router = new Router("history");
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);
  });

  afterEach(() => {
    document.body.removeChild(rootElement);
  });

  it("should append new element to root if currentPath matches content", async () => {
    const content = "/about";
    const someBeforeEnter = router.someBeforeEnter(content);
    const args = {
      currentPath: content,
      previousPath: "/home",
      state: { title: "Test" },
    };

    await someBeforeEnter(args);

    expect(rootElement.innerHTML).toContain("<h2>BeforeEnter: /about</h2>");
  });

  it("should not append new element if currentPath does not match content", async () => {
    const content = "/about";
    const someBeforeEnter = router.someBeforeEnter(content);
    const args = {
      currentPath: "/contact",
      previousPath: "/home",
      state: { title: "Test" },
    };

    await someBeforeEnter(args);

    expect(rootElement.innerHTML).not.toContain("<h2>BeforeEnter: /about</h2>");
  });
});
