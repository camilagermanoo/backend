const request = require("supertest")
const app = require("../app")

describe("Testes da API de Tarefas", () => {
  let tarefaId

  // GET /tarefas
  it("Deve retornar todas as tarefas (status 200 e JSON)", async () => {
    const res = await request(app).get("/tarefas");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/json/);
  });

  // POST /tarefas
  it("Deve criar uma nova tarefa (status 201 e JSON)", async () => {
    const res = await request(app)
      .post("/tarefas")
      .send({ nome: "Estudar Node", concluida: false })
    expect(res.status).toBe(201)
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(res.body).toHaveProperty("id")
    tarefaId = res.body.id
  });

  // GET /tarefas/:id
  it("Deve retornar uma tarefa pelo id (status 200 e JSON)", async () => {
    const res = await request(app).get(`/tarefas/${tarefaId}`)
    expect(res.status).toBe(200)
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(res.body).toHaveProperty("id", tarefaId)
  });

  // GET /tarefas/1
  it("Deve retornar 404 ao buscar tarefa inexistente", async () => {
    const res = await request(app).get("/tarefas/1")
    expect(res.status).toBe(404)
    expect(res.headers["content-type"]).toMatch(/json/)
  });

  // PUT /tarefas/:id
  it("Deve atualizar a tarefa pelo id (status 200 e JSON)", async () => {
    const res = await request(app)
      .put(`/tarefas/${tarefaId}`)
      .send({ nome: "Estudar Node e Express", concluida: true })
    expect(res.status).toBe(200)
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(res.body).toHaveProperty("id", tarefaId)
    expect(res.body.nome).toBe("Estudar Node e Express")
    expect(res.body.concluida).toBe(true)
  });

  // PUT /tarefas/1 (não existe)
  it("Deve retornar 404 ao atualizar tarefa inexistente", async () => {
    const res = await request(app)
      .put("/tarefas/1")
      .send({ nome: "Qualquer", concluida: true })
    expect(res.status).toBe(404)
    expect(res.headers["content-type"]).toMatch(/json/)
  });

  // DELETE /tarefas/:id
  it("Deve excluir a tarefa pelo id (status 204 e sem conteúdo)", async () => {
    const res = await request(app).delete(`/tarefas/${tarefaId}`)
    expect(res.status).toBe(204)
    expect(res.text).toBe("")
  });

  // DELETE /tarefas/1 (não existe)
  it("Deve retornar 404 ao excluir tarefa inexistente", async () => {
    const res = await request(app).delete("/tarefas/1")
    expect(res.status).toBe(404)
    expect(res.headers["content-type"]).toMatch(/json/)
  })
})
