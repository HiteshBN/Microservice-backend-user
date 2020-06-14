export const config = {
  "dev": {
    "username": process.env.UDAGRAM_POSTGRES_USERNAME,
    "password": process.env.UDAGRAM_POSTGRES_PASSWORD,
    "database": process.env.UDAGRAM_POSTGRES_DB,
    "host": process.env.UDAGRAM_POSTGRES_HOST,
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET,
    "port" : process.env.UDAGRAM_USER_API_PORT
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }
}
