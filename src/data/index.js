import axios from 'axios';

function CreateInstance() {
  this.instance = axios.create({
    baseURL:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:4000/api/'
        : 'https://moviez-buff.netlify.app/.netlify/functions/api/',
    headers: { Accept: 'application/json' },
  });
}

const instance = new CreateInstance();
export default instance.instance;
