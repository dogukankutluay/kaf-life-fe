function fetch(request) {
  return request()
    .then((res) => {
      const response = {
        success: res.data.data.success,
        message: res.data.data.message,
        data: res.data.data || res.data,
        loading: false,
      };

      return response;
    })
    .catch((error) => {
      const response = {
        success: false,
        message:
          error.response.data.message ||
          error.response.message ||
          error.response ||
          ' An error occured',
        loading: false,
      };
      return response;
    });
}

export default fetch;
