function status(request, response) {
  response.status(200).json({ chave: "tudo certin" });
}

export default status;
