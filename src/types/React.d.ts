import { ComponentType } from "react";

declare module "react" {
  export type AnyProps = Record<string, unknown>;
  export type CT<P = AnyProps> = ComponentType<P>;
}
