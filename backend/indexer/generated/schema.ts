// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Mood extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Mood entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Mood must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Mood", id.toString(), this);
    }
  }

  static load(id: string): Mood | null {
    return changetype<Mood | null>(store.get("Mood", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get hash(): string {
    let value = this.get("hash");
    return value!.toString();
  }

  set hash(value: string) {
    this.set("hash", Value.fromString(value));
  }

  get message(): string | null {
    let value = this.get("message");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set message(value: string | null) {
    if (!value) {
      this.unset("message");
    } else {
      this.set("message", Value.fromString(<string>value));
    }
  }

  get category(): string | null {
    let value = this.get("category");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set category(value: string | null) {
    if (!value) {
      this.unset("category");
    } else {
      this.set("category", Value.fromString(<string>value));
    }
  }

  get date(): string | null {
    let value = this.get("date");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set date(value: string | null) {
    if (!value) {
      this.unset("date");
    } else {
      this.set("date", Value.fromString(<string>value));
    }
  }

  get author(): Bytes {
    let value = this.get("author");
    return value!.toBytes();
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}