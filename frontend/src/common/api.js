export default {
  async get(url) {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
    });
    return await res.json();
  },

  async post(url, body) {
    const res = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  },

  async put(url, body) {
    const res = await fetch(url, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  },

  async delete(url, body) {
    const res = await fetch(url, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return await res.json();
  },
}
