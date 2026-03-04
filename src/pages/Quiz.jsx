import { memo } from "react";

const Quiz = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.text}>Quiz/Games</h1>
      <p style={styles.text}>Coming Soon...</p>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
};

export default memo(Quiz);
