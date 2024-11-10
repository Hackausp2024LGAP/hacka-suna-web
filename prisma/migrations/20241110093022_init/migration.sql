-- CreateTable
CREATE TABLE "Usuario" (
    "cpf" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "pass" TEXT NOT NULL,
    "cel" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Cliente" (
    "cpfCliente" TEXT NOT NULL PRIMARY KEY,
    "valorConfirmacao" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Tecnico" (
    "cpfTecnico" TEXT NOT NULL PRIMARY KEY
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAvaliacao" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rateCliente" INTEGER NOT NULL,
    "cpfTecnico" TEXT,
    "cpfCliente" TEXT,
    CONSTRAINT "Avaliacao_cpfTecnico_fkey" FOREIGN KEY ("cpfTecnico") REFERENCES "Tecnico" ("cpfTecnico") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Avaliacao_cpfCliente_fkey" FOREIGN KEY ("cpfCliente") REFERENCES "Cliente" ("cpfCliente") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pedido" (
    "idPedido" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "image" TEXT,
    "descPedido" TEXT NOT NULL,
    "orcamentoPedido" DECIMAL NOT NULL,
    "horarioInicioPedido" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cpfTecnico" TEXT,
    "cpfCliente" TEXT NOT NULL,
    "horarioPedido" DATETIME NOT NULL,
    "statusPedido" BOOLEAN NOT NULL,
    CONSTRAINT "Pedido_cpfTecnico_fkey" FOREIGN KEY ("cpfTecnico") REFERENCES "Tecnico" ("cpfTecnico") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Pedido_cpfCliente_fkey" FOREIGN KEY ("cpfCliente") REFERENCES "Cliente" ("cpfCliente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chat" (
    "idChat" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpfTecnico" TEXT,
    "cpfCliente" TEXT NOT NULL,
    "statusChat" BOOLEAN NOT NULL,
    "horarioInicioChat" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Chat_cpfTecnico_fkey" FOREIGN KEY ("cpfTecnico") REFERENCES "Tecnico" ("cpfTecnico") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Chat_cpfCliente_fkey" FOREIGN KEY ("cpfCliente") REFERENCES "Cliente" ("cpfCliente") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "idMensagem" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "idSender" INTEGER NOT NULL,
    "messageText" TEXT NOT NULL,
    "horarioMensagem" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idChat" INTEGER,
    CONSTRAINT "Mensagem_idChat_fkey" FOREIGN KEY ("idChat") REFERENCES "Chat" ("idChat") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rating" (
    "idRating" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "rateTecnico" INTEGER,
    "cpfTecnico" TEXT,
    "cpfCliente" TEXT,
    CONSTRAINT "Rating_cpfTecnico_fkey" FOREIGN KEY ("cpfTecnico") REFERENCES "Tecnico" ("cpfTecnico") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Rating_cpfCliente_fkey" FOREIGN KEY ("cpfCliente") REFERENCES "Cliente" ("cpfCliente") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Trabalho" (
    "idTrabalho" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cpfTecnico" TEXT,
    "cpfCliente" TEXT,
    "idPedido" INTEGER,
    "statusTrabalho" BOOLEAN NOT NULL,
    "orcamentoTrabalho" DECIMAL NOT NULL,
    "ratingTrabalho" INTEGER NOT NULL,
    "tip" DECIMAL NOT NULL,
    "horarioMensagem" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataFimTrabalho" DATETIME,
    CONSTRAINT "Trabalho_cpfTecnico_fkey" FOREIGN KEY ("cpfTecnico") REFERENCES "Tecnico" ("cpfTecnico") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Trabalho_cpfCliente_fkey" FOREIGN KEY ("cpfCliente") REFERENCES "Cliente" ("cpfCliente") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Trabalho_idPedido_fkey" FOREIGN KEY ("idPedido") REFERENCES "Pedido" ("idPedido") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");
