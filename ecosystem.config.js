module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
      {
          name: "SleepAidenWeb",
          script: "bin/www",
          env_development: {
              NODE_ENV: "development"
          },
          env_production : {
              NODE_ENV: "production"
          },
          watch: false,
          instances: 1,
          exec_mode: "cluster",
          log_date_format: "YYYY-MM-DD HH:mm Z",
          error_file: "./log/errors.log",
          out_file: "./log/out.log",
          merge_logs: false
      }
  ]
}
