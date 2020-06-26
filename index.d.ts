
declare interface ColorToken {
  description?: string;
  value: string;
  hexValue: string;
  rgbValue: string;
}

declare interface BasicToken {
  description?: string;
  value: string;
}

declare interface Tokens {
  fbBrick: ColorToken;
  fbLightBrick: ColorToken;
  fbLighterBrick: ColorToken;
  fbGold: ColorToken;
  fbLightGold: ColorToken;
}
  
declare const tokens: Tokens;
export = tokens;
