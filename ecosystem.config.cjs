module.exports = {
    apps: [
      {
        name: "lms-app",
        script: "src/server.ts",
        interpreter: "tsx",
        //instances: "2", // Or specify the number of instances you want to run
        //exec_mode: "cluster",
        env: {
          NODE_ENV: "development"
        }
      }
    ]
  };