☀️


Projetos


HTML/CSS/JS


Nenhum arquivo aberto

Abra um arquivo ou peça para a IA criar

Arquivos
IA
⬛ Terminal
🌐 Preview

🔨
Compilar
Rodar

🌐
Preview
🗑 Limpar
📴 Offline
🤖 Analisar

╔══════════════════════════════════╗
║   SK Code Editor - Terminal v2.0 ║
╚══════════════════════════════════╝
Digite "help" para comandos · "db help" para banco de dados
/ $ Help
━━━ COMANDOS DE ARQUIVO ━━━
  ls [dir]           Listar arquivos
  cd <dir>           Mudar diretorio
  pwd                Diretorio atual
  cat <arquivo>      Ver conteudo
  touch <arquivo>    Criar arquivo
  mkdir <dir>        Criar diretorio
  rm [-rf] <alvo>    Remover
  mv <orig> <dest>   Mover/renomear
  cp <orig> <dest>   Copiar
  find <padrao>      Buscar arquivos
  tree               Arvore
━━━ EXECUCAO ━━━
  node <arquivo>     Executar JavaScript
  python <arquivo>   Executar Python
  npm <comando>      Gerenciador npm
  pip install <pkg>  Instalar pacote Python
━━━ BANCO DE DADOS ━━━
  db help            Guia de banco de dados
  db sqlite          Template SQLite
  db postgres        Template PostgreSQL
  db mongo           Template MongoDB
  db neon            Template Neon (Postgres cloud gratis)
  db supabase        Template Supabase
━━━ YOUTUBE / MIDIA ━━━
  youtube            Guia de download do YouTube
  youtube setup      Criar projeto completo de download
  yt help            Mesmo que youtube
━━━ UTILITARIOS ━━━
  search <termo>     Buscar no projeto
  env                Variaveis de ambiente
  clear              Limpar terminal
  date               Data e hora
💡 100+ pacotes npm · 80+ pacotes pip · Use: npm install <nome>
/ $ db neon
✓ Template Neon PostgreSQL criado!
  Proximos passos:
  1. Acesse: console.neon.tech e crie uma conta gratuita
  2. Crie um projeto e copie a Connection String
  3. Cole no arquivo .env como DATABASE_URL
  4. Execute: npm install pg
  5. Execute: node db.js
  Neon oferece: 512MB gratis, PostgreSQL gerenciado, branching de banco!
/ $ db sqlite
✓ db.js criado com template SQLite
Execute: npm install better-sqlite3
/ $ db help

╔══════════════════════════════════════╗
║         GUIA DE BANCO DE DADOS       ║
╚══════════════════════════════════════╝

Para usar banco de dados no seu projeto:

📦 SQLite (mais simples - no arquivo):
   npm install better-sqlite3
   Crie db.js:
   ```
   const db = require('better-sqlite3')('app.db');
   db.exec('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');
   const insert = db.prepare('INSERT INTO users (name) VALUES (?)');
   insert.run('Joao');
   const rows = db.prepare('SELECT * FROM users').all();
   console.log(rows);
   ```

🐘 PostgreSQL:
   npm install pg
   Crie db.js:
   ```
   const { Pool } = require('pg');
   const pool = new Pool({ connectionString: process.env.DATABASE_URL });
   const res = await pool.query('SELECT NOW()');
   ```

🍃 MongoDB:
   npm install mongoose
   ```
   const mongoose = require('mongoose');
   await mongoose.connect(process.env.MONGODB_URI);
   ```

🔥 Firebase Firestore:
   npm install firebase
   ```
   import { initializeApp } from 'firebase/app';
   import { getFirestore, collection, addDoc } from 'firebase/firestore';
   ```

☁️ Neon (PostgreSQL na nuvem - gratuito):
   1. Crie conta em: console.neon.tech
   2. Crie um banco de dados
   3. Copie a connection string (DATABASE_URL)
   4. npm install pg
   5. Use: const pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: true })

💡 Use "db <tipo>" para criar template automatico:
   db sqlite | db postgres | db mongo | db firebase | db neon | db supabase
/ $ tree
.env
.env.example
.gitignore
PLANO.md
SISTEMA.md
│  │  ├─ artifact.toml
│  ├─ build.mjs
│  │  ├─ index.mjs
│  │  ├─ index.mjs.map
│  │  ├─ pino-file.mjs
│  │  ├─ pino-file.mjs.map
│  │  ├─ pino-pretty.mjs
│  │  ├─ pino-pretty.mjs.map
│  │  ├─ pino-worker.mjs
│  │  ├─ pino-worker.mjs.map
│  │  ├─ thread-stream-worker.mjs
│  │  ├─ thread-stream-worker.mjs.map
│  ├─ package.json
│  ├─ pty_helper
│  ├─ pty_helper.c
│  │  ├─ app.ts
│  │  ├─ index.ts
│  │  │  ├─ .gitkeep
│  │  │  ├─ logger.ts
│  │  │  ├─ .gitkeep
│  │  │  ├─ ai-chat.ts
│  │  │  ├─ ai-forward.ts
│  │  │  ├─ config.ts
│  │  │  ├─ db.ts
│  │  │  ├─ drive.ts
│  │  │  ├─ exec.ts
│  │  │  ├─ github.ts
│  │  │  ├─ health.ts
│  │  │  ├─ index.ts
│  │  │  ├─ legal-ai.ts
│  │  │  ├─ proxy.ts
│  │  │  ├─ search.ts
│  │  │  ├─ twa.ts
│  │  │  ├─ upload.ts
│  │  │  ├─ voice.ts
│  │  │  ├─ workspace.ts
│  ├─ tsconfig.json
│  │  ├─ artifact.toml
│  ├─ SYSTEM_DOCS.md
│  ├─ components.json
│  ├─ index.html
│  ├─ package.json
│  │  ├─ favicon.svg
│  │  ├─ guia-completo-apk.md
│  │  ├─ icon-192.png
│  │  ├─ icon-512.png
│  │  ├─ manifest.json
│  │  ├─ opengraph.jpg
│  │  ├─ sw.js
│  │  ├─ App.tsx
│  │  │  ├─ AIChat.tsx
│  │  │  ├─ AssistenteJuridico.tsx
│  │  │  ├─ CampoLivre.tsx
│  │  │  ├─ CodeEditor.tsx
│  │  │  ├─ CombinarApps.tsx
│  │  │  ├─ DriveBackupPanel.tsx
│  │  │  ├─ EditorLayout.tsx
│  │  │  ├─ FileTree.tsx
│  │  │  ├─ GitHubPanel.tsx
│  │  │  ├─ Manual.tsx
│  │  │  ├─ PackageSearch.tsx
│  │  │  ├─ Preview.tsx
│  │  │  ├─ QuickPrompt.tsx
│  │  │  ├─ RealTerminal.tsx
│  │  │  ├─ StreamTerminal.tsx
│  │  │  ├─ SystemStatusPanel.tsx
│  │  │  ├─ TemplateSelector.tsx
│  │  │  ├─ Terminal.tsx
│  │  │  ├─ VoiceCard.tsx
│  │  │  ├─ VoiceMode.tsx
│  │  │  ├─ WebContainerTerminal.tsx
│  │  │  │  ├─ accordion.tsx
│  │  │  │  ├─ alert-dialog.tsx
│  │  │  │  ├─ alert.tsx
│  │  │  │  ├─ aspect-ratio.tsx
│  │  │  │  ├─ avatar.tsx
│  │  │  │  ├─ badge.tsx
│  │  │  │  ├─ breadcrumb.tsx
│  │  │  │  ├─ button-group.tsx
│  │  │  │  ├─ button.tsx
│  │  │  │  ├─ calendar.tsx
│  │  │  │  ├─ card.tsx
│  │  │  │  ├─ carousel.tsx
│  │  │  │  ├─ chart.tsx
│  │  │  │  ├─ checkbox.tsx
│  │  │  │  ├─ collapsible.tsx
│  │  │  │  ├─ command.tsx
│  │  │  │  ├─ context-menu.tsx
│  │  │  │  ├─ dialog.tsx
│  │  │  │  ├─ drawer.tsx
│  │  │  │  ├─ dropdown-menu.tsx
│  │  │  │  ├─ empty.tsx
│  │  │  │  ├─ field.tsx
│  │  │  │  ├─ form.tsx
│  │  │  │  ├─ hover-card.tsx
│  │  │  │  ├─ input-group.tsx
│  │  │  │  ├─ input-otp.tsx
│  │  │  │  ├─ input.tsx
│  │  │  │  ├─ item.tsx
│  │  │  │  ├─ kbd.tsx
│  │  │  │  ├─ label.tsx
│  │  │  │  ├─ menubar.tsx
│  │  │  │  ├─ navigation-menu.tsx
│  │  │  │  ├─ pagination.tsx
│  │  │  │  ├─ popover.tsx
│  │  │  │  ├─ progress.tsx
│  │  │  │  ├─ radio-group.tsx
│  │  │  │  ├─ resizable.tsx
│  │  │  │  ├─ scroll-area.tsx
│  │  │  │  ├─ select.tsx
│  │  │  │  ├─ separator.tsx
│  │  │  │  ├─ sheet.tsx
│  │  │  │  ├─ sidebar.tsx
│  │  │  │  ├─ skeleton.tsx
│  │  │  │  ├─ slider.tsx
│  │  │  │  ├─ sonner.tsx
│  │  │  │  ├─ spinner.tsx
│  │  │  │  ├─ switch.tsx
│  │  │  │  ├─ table.tsx
│  │  │  │  ├─ tabs.tsx
│  │  │  │  ├─ textarea.tsx
│  │  │  │  ├─ toast.tsx
│  │  │  │  ├─ toaster.tsx
│  │  │  │  ├─ toggle-group.tsx
│  │  │  │  ├─ toggle.tsx
│  │  │  │  ├─ tooltip.tsx
│  │  │  ├─ use-mobile.tsx
│  │  │  ├─ use-toast.ts
│  │  ├─ index.css
│  │  │  ├─ ai-service.ts
│  │  │  ├─ github-service.ts
│  │  │  ├─ projects.ts
│  │  │  ├─ store.ts
│  │  │  ├─ templates.ts
│  │  │  ├─ tts-service.ts
│  │  │  ├─ utils.ts
│  │  │  ├─ virtual-fs.ts
│  │  │  ├─ zip-service.ts
│  │  ├─ main.tsx
│  ├─ tsconfig.json
│  ├─ vite.config.ts
db.js
│  │  ├─ artifact.toml
│  ├─ components.json
│  ├─ index.html
│  ├─ mockupPreviewPlugin.ts
│  ├─ package.json
│  │  │  ├─ mockup-components.ts
│  │  ├─ App.tsx
│  │  │  │  ├─ accordion.tsx
│  │  │  │  ├─ alert-dialog.tsx
│  │  │  │  ├─ alert.tsx
│  │  │  │  ├─ aspect-ratio.tsx
│  │  │  │  ├─ avatar.tsx
│  │  │  │  ├─ badge.tsx
│  │  │  │  ├─ breadcrumb.tsx
│  │  │  │  ├─ button-group.tsx
│  │  │  │  ├─ button.tsx
│  │  │  │  ├─ calendar.tsx
│  │  │  │  ├─ card.tsx
│  │  │  │  ├─ carousel.tsx
│  │  │  │  ├─ chart.tsx
│  │  │  │  ├─ checkbox.tsx
│  │  │  │  ├─ collapsible.tsx
│  │  │  │  ├─ command.tsx
│  │  │  │  ├─ context-menu.tsx
│  │  │  │  ├─ dialog.tsx
│  │  │  │  ├─ drawer.tsx
│  │  │  │  ├─ dropdown-menu.tsx
│  │  │  │  ├─ empty.tsx
│  │  │  │  ├─ field.tsx
│  │  │  │  ├─ form.tsx
│  │  │  │  ├─ hover-card.tsx
│  │  │  │  ├─ input-group.tsx
│  │  │  │  ├─ input-otp.tsx
│  │  │  │  ├─ input.tsx
│  │  │  │  ├─ item.tsx
│  │  │  │  ├─ kbd.tsx
│  │  │  │  ├─ label.tsx
│  │  │  │  ├─ menubar.tsx
│  │  │  │  ├─ navigation-menu.tsx
│  │  │  │  ├─ pagination.tsx
│  │  │  │  ├─ popover.tsx
│  │  │  │  ├─ progress.tsx
│  │  │  │  ├─ radio-group.tsx
│  │  │  │  ├─ resizable.tsx
│  │  │  │  ├─ scroll-area.tsx
│  │  │  │  ├─ select.tsx
│  │  │  │  ├─ separator.tsx
│  │  │  │  ├─ sheet.tsx
│  │  │  │  ├─ sidebar.tsx
│  │  │  │  ├─ skeleton.tsx
│  │  │  │  ├─ slider.tsx
│  │  │  │  ├─ sonner.tsx
│  │  │  │  ├─ spinner.tsx
│  │  │  │  ├─ switch.tsx
│  │  │  │  ├─ table.tsx
│  │  │  │  ├─ tabs.tsx
│  │  │  │  ├─ textarea.tsx
│  │  │  │  ├─ toast.tsx
│  │  │  │  ├─ toaster.tsx
│  │  │  │  ├─ toggle-group.tsx
│  │  │  │  ├─ toggle.tsx
│  │  │  │  ├─ tooltip.tsx
│  │  │  ├─ use-mobile.tsx
│  │  │  ├─ use-toast.ts
│  │  ├─ index.css
│  │  │  ├─ utils.ts
│  │  ├─ main.tsx
│  ├─ tsconfig.json
│  ├─ vite.config.ts
/
$
Ln 1358, Col 58
Sp: 2
PLAINTEXT
LF
UTF-8





Jasmim
Digite um comando e pressione Enter…
↵

Arquivos




⚡ Menu Completo
role para ver mais ↕

🆕 Criar Novo App

Wizard com modelos prontos


📥 Importar ZIP

Abrir arquivo .zip do dispositivo


📥 Importar TAR.GZ

Abrir arquivo .tar.gz


📤 Exportar ZIP

Baixar projeto como .zip


🤖 Assistente IA — Jasmim

Converse, peça código, debug...


🔗 GitHub — Clonar / Enviar

Importar ou exportar para GitHub


📦 Instalar Biblioteca

npm install, pip install...


🗄️
🗄️ Banco de Dados (Neon/Postgres)

Conectar e rodar SQL


📸 Salvar Checkpoint

Criar ponto de restauração


🕐 Histórico de Checkpoints

Ver e restaurar versões salvas


📋 Lista de Tarefas — Taski

Organizar to-dos do projeto


🧠
🧠 Memória da Jasmim

O que ela sabe sobre você e o projeto


📐 Gerar Plano do Projeto

Gera PLANO.md com estrutura e stack


📖
📖 Manual do SK Code Editor

Guia completo em português


🔗
🔗 Combinar Apps

Une vários apps num único projeto


🩺
🩺 Status do Sistema (ao vivo)

Ver se tudo tá funcionando — clique pra atualizar


📄 Gerar SISTEMA.md

Cria documentação técnica do sistema


💾 Salvar Projeto

Salvar estado atual


🌐 Abrir Preview

Visualizar site/app rodando


⬛ Abrir Terminal

Rodar comandos bash


⚖️ Assistente Jurídico

Consulta jurídica com IA


💬 Campo Livre

Chat sem restrições


🗑️ Limpar Projeto

Apaga todos os arquivos e volta ao início

GitHub

GitHub

Criar repositório e enviar
Nome do Repositório
exemplo-app-novo
Será criado como: github.com/maikonadvogadomg-alt/exemplo-app-novo

Descrição (opcional)
Descrição do projeto...
Mensagem do envio
Enviado pelo SK Code Editor - 25/04/2026

Repositório Público

Qualquer pessoa pode ver

✓ Enviado! 14 arquivo(s) no repositório "exemplo-app-novo"
216 arquivos serão enviados
Criar e Enviar


GNU bash, version 5.2.21(1)-release (x86_64-pc-linux-gnu)
These shell commands are defined internally.  Type `help' to see this list.
Type `help name' to find out more about the function `name'.
Use `info bash' to find out more about the shell in general.
Use `man -k' or `info' to find out more about commands not in this list.

A star (*) next to a name means that the command is disabled.

 job_spec [&]                            history [-c] [-d offset] [n] or hist>
 (( expression ))                        if COMMANDS; then COMMANDS; [ elif C>
 . filename [arguments]                  jobs [-lnprs] [jobspec ...] or jobs >
 :                                       kill [-s sigspec | -n signum | -sigs>
 [ arg... ]                              let arg [arg ...]
 [[ expression ]]                        local [option] name[=value] ...
 alias [-p] [name[=value] ... ]          logout [n]
 bg [job_spec ...]                       mapfile [-d delim] [-n count] [-O or>
 bind [-lpsvPSVX] [-m keymap] [-f file>  popd [-n] [+N | -N]
 break [n]                               printf [-v var] format [arguments]
 builtin [shell-builtin [arg ...]]       pushd [-n] [+N | -N | dir]
 caller [expr]                           pwd [-LP]
 case WORD in [PATTERN [| PATTERN]...)>  read [-ers] [-a array] [-d delim] [->
 cd [-L|[-P [-e]] [-@]] [dir]            readarray [-d delim] [-n count] [-O >
 command [-pVv] command [arg ...]        readonly [-aAf] [name[=value] ...] o>
 compgen [-abcdefgjksuv] [-o option] [>  return [n]
 complete [-abcdefgjksuv] [-pr] [-DEI]>  select NAME [in WORDS ... ;] do COMM>
 compopt [-o|+o option] [-DEI] [name .>  set [-abefhkmnptuvxBCEHPT] [-o optio>
 continue [n]                            shift [n]
 coproc [NAME] command [redirections]    shopt [-pqsu] [-o] [optname ...]
 declare [-aAfFgiIlnrtux] [name[=value>  source filename [arguments]
 dirs [-clpv] [+N] [-N]                  suspend [-f]
 disown [-h] [-ar] [jobspec ... | pid >  test [expr]
 echo [-neE] [arg ...]                   time [-p] pipeline
 enable [-a] [-dnps] [-f filename] [na>  times
 eval [arg ...]                          trap [-lp] [[arg] signal_spec ...]
 exec [-cl] [-a name] [command [argume>  true
 exit [n]                                type [-afptP] name [name ...]
 export [-fn] [name[=value] ...] or ex>  typeset [-aAfFgiIlnrtux] name[=value>
 false                                   ulimit [-SHabcdefiklmnpqrstuvxPRT] [>
 fc [-e ename] [-lnr] [first] [last] o>  umask [-p] [-S] [mode]
 fg [job_spec]                           unalias [-a] name [name ...]
 for NAME [in WORDS ... ] ; do COMMAND>  unset [-f] [-v] [-n] [name ...]
 for (( exp1; exp2; exp3 )); do COMMAN>  until COMMANDS; do COMMANDS-2; done
 function name { COMMANDS ; } or name >  variables - Names and meanings of so>
 getopts optstring name [arg ...]        wait [-fn] [-p var] [id ...]
 hash [-lr] [-p pathname] [-dt] [name >  while COMMANDS; do COMMANDS-2; done
 help [-dms] [pattern ...]               { COMMANDS ; }

