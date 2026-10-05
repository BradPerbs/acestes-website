export type HelmetId =
  | "corinthian" | "trojan" | "attic" | "galea" | "viking"
  | "greathelm" | "barbute" | "morion" | "kabuto";
export type CrestId = "plume" | "transverse" | "horns" | "crown" | "feathers" | "none";
export const REST: { yaw: number; pitch: number };
export function whenHelmetReady(helmet?: HelmetId): Promise<boolean>;
export function framing(helmet: HelmetId, crest: CrestId, range: [number, number][]): { grow: number; dx: number; dy: number };
export function drawHelmet(
  out: HTMLCanvasElement,
  options: {
    helmet?: HelmetId; crest?: CrestId; yaw?: number; pitch?: number;
    range?: [number, number][] | null; line?: string; paper?: string | null;
    size?: number; canvasSize?: number;
  },
): boolean;
