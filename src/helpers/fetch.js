const baseUrl = process.env.REACT_APP_API_URL;

const fetchSinToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchConToken = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";

  if (method === "GET") {
    return fetch(url, {
      method,
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
  } else {
    return fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

const fetchGETPOSTPUTDELETE = (endpoint, data, method) => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  return fetch(url, {
    method,
    headers: {
      Authorization: `bearer ${token}`,
    },
    body: data,
  });
};

const fetchGETPOSTPUTDELETEJSON = (endpoint, data, method) => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  return fetch(url, {
    method,
    headers: {
      Authorization: `bearer ${token}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

const fetchRUC = (documento, method) => {
  const url = `https://dniruc.apisperu.com/api/v1/ruc/${documento}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImhlY3RvcnRvcnJlc2R1cmFuZEBnbWFpbC5jb20ifQ.uiu8kd-ckQoAwuPMMpTizUF48Qfe6cbmEWytmmEqaXg`;

  return fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
  });
};

const fetchDNI = (documento, method) => {
  const url = `https://dniruc.apisperu.com/api/v1/dni/${documento}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImhlY3RvcnRvcnJlc2R1cmFuZEBnbWFpbC5jb20ifQ.uiu8kd-ckQoAwuPMMpTizUF48Qfe6cbmEWytmmEqaXg`;

  return fetch(url, {
    method,
    headers: {
      "Content-type": "application/json",
    },
  });
};

const postExcel = (endpoint, data, method) => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem("token") || "";
  return fetch(url, {
    method,
    headers: {
      Authorization: `bearer ${token}`,
    },
    body: data,
  });
};

export {
  fetchSinToken,
  fetchConToken,
  fetchGETPOSTPUTDELETE,
  fetchGETPOSTPUTDELETEJSON,
  fetchRUC,
  fetchDNI,
  postExcel
};
