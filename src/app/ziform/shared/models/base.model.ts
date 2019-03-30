export abstract  class BaseModel<P,C> {

  private _parent : P;
  private _id : string;
  private _name : string;
  private _step : string;
  private _children : C [] = [];

  constructor(){}


    /**
     * Getter parent
     * @return {P}
     */
	public get parent(): P {
		return this._parent;
	}

    /**
     * Getter id
     * @return {string}
     */
	public get id(): string {
		return this._id;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter step
     * @return {string}
     */
	public get step(): string {
		return this._step;
	}

    /**
     * Getter children
     * @return {C []}
     */
	public get children(): C [] {
		return this._children;
	}

    /**
     * Setter parent
     * @param {P} value
     */
	public set parent(value: P) {
		this._parent = value;
	}

    /**
     * Setter id
     * @param {string} value
     */
	public set id(value: string) {
		this._id = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter step
     * @param {string} value
     */
	public set step(value: string) {
		this._step = value;
	}

    /**
     * Setter children
     * @param {C []} value
     */
	public set children(value: C []) {
		this._children = value;
	}


}
