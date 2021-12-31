import { store as createStore } from "storxy";

interface Settings {
  /**
   * Background image of the page
   */
  backgroundImage: string;
  /**
   * Count of snowflakes
   */
  snowflakesCount: number;
  /**
   * Snowflakes angle
   */
  snowflakesAngle: number;
  /**
   * Snowflake size
   */
  snowflakeSize: number;
  /**
   * Snowflake speed
   */
  snowflakeSpeed: number;
  /**
   * Type of snowfall
   */
  snowfallType: 0 | 1;
}

export const settings = createStore<Settings>({
  backgroundImage: "https://i.imgur.com/x4jMLU7.jpg",
  snowflakesCount: 100,
  snowflakesAngle: 0,
  snowflakeSize: 5,
  snowflakeSpeed: 10,
  snowfallType: 0,
});

window.livelyPropertyListener = (name, value) => {
  if (["backgroundImage", "snowflakesCount", "snowflakesAngle", "snowflakeSize", "snowflakeSpeed", "snowfallType"].includes(name)) {
    //@ts-ignore
    settings.$[name] = value;
  }
};
