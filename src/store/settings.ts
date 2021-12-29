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
}

export const settings = createStore<Settings>({
  backgroundImage: "https://i.imgur.com/x4jMLU7.jpg",
  snowflakesCount: 100,
  snowflakesAngle: 0,
  snowflakeSize: 5,
  snowflakeSpeed: 5,
});

window.livelyPropertyListener = (name, value) => {
  if (["backgroundImage", "snowflakesCount", "snowflakesAngle", "snowflakeSize", "snowflakeSpeed"].includes(name)) {
    //@ts-ignore
    settings.$[name] = value;
  }
};
