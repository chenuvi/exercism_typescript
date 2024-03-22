type Node<T> = {
  head: Node<T>;
  value: T;
  tail: Node<T>;
} | null;

export class LinkedList<TElement> {
  last: Node<TElement> = null;
  first: Node<TElement> = null;

  public initialItem(element: TElement) {
    const el = {
      head: null,
      value: element,
      tail: null,
    };
    this.last = el;
    this.first = el;
  }

  public push(element: TElement) {
    if (!this.last) {
      this.initialItem(element);
      return;
    }
    const el = {
      head: this.last,
      value: element,
      tail: null,
    };
    this.last.tail = el;
    this.last = el;
  }

  public pop() {
    if (!this.last) return null;

    const toBeReturned = this.last.value;
    this.last = this.last.head;
    if (this.last) {
      this.last.tail = null;
    } else {
      this.first = null;
    }
    return toBeReturned;
  }

  public shift() {
    if (!this.first) {
      return null;
    }
    const toBeReturned = this.first.value;
    this.first = this.first.tail;
    if (this.first) {
      this.first.head = null;
    } else {
      this.last = null;
    }
    return toBeReturned;
  }

  public unshift(element: unknown) {
    throw new Error("Remove this statement and implement this function");
  }

  public delete(element: unknown) {
    throw new Error("Remove this statement and implement this function");
  }

  public count(): unknown {
    throw new Error("Remove this statement and implement this function");
  }
}
