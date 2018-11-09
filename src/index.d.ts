
type Descriptor = string | { [key: string]: any };

declare function protons(desc: Descriptor, options?: { [key: string]: any }): any;

declare namespace protons {
  function protons(desc: Descriptor, options?: { [key: string]: any }): any;
}

export = protons;
