module.exports = {
  apps: [
    {
      name: 'energee-com-br-dev',
      script: 'npm',
      args: 'run dev',
      cwd: '/var/www/html/energee_com_br_new',
      interpreter: 'none',
      env: {
        NODE_ENV: 'development',
        PORT: 3003,
      },
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      error_file: '/var/www/html/energee_com_br_new/logs/pm2-error.log',
      out_file: '/var/www/html/energee_com_br_new/logs/pm2-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    },
  ],
};

