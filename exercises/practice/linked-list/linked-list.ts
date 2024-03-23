type Node<T> = {
  head: Node<T>;
  value: T;
  tail: Node<T>;
} | null;

// TODO test 3,5 Failed
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

  // TODO fix
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

  // TODO fix
  public unshift(element: TElement) {
    if (!this.first) {
      this.initialItem(element);
      return;
    }
    const el = { head: null, value: element, tail: null };
    this.first.head = el;
    this.first.tail = el;
  }

  public delete(element: TElement) {
    let current = this.first;
    while (current) {
      if (current.value === element) {
        break;
      }
      current = current.tail;
    }
    if (current === this.first) {
      this.first = null;
      this.last = null;
      return;
    }
    if (current?.head) {
      current.head.tail = current.tail;
    }
  }

  public count(): number {
    let count = 0;
    let current = this.first;
    while (current) {
      count++;
      current = current.tail;
    }
    return count;
  }
}
