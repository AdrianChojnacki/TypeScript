class Example {
  public readonly id: number;
  private name: string;
  protected costam: string;

  constructor(id: number, name: string, costam: string) {
    this.id = id;
    this.name = name;
    this.costam = costam;
  }

  changeId() {
    this.id = 5;
  }
}
