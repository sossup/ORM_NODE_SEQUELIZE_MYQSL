//criar nova tabela com atributos 
npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string


//inserir objeto dentro da tabela pessoas
insert into pessoas (nome, ativo, email, role, createdAt, updatedAt) values ("Carla Gomes", 1, "carla@carla.com", "estudante", NOW(), NOW());


//fazer uma pesquisa doque tem dentro de pessoas
select * from Pessoas;

//mostrar os parametros da tabela pessoa
describe pessoas;

//visualisar as tabelas dentro de database
show tables;

// visualisar as databases
show databases;

// voltar para a ultima alteração do banco
npx sequelize-cli db:migrate:undo
//ou retornar em um momento mais especifico
db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js

//popular o banco com um seed
npx sequelize-cli db:seed:all

//gerar um arquivo em seeders pre definido
npx sequelize-cli seed:generate --name demo-pessoa

//rodar o server
npm run start

//fazer a migração para o banco 
npx sequelize-cli db:migrate

//desfazer seed
npx sequelize db:seed:undo

//desfazer um seed especifico
npx sequelize db:seed:undo --seed nome-do-arquivo

//desfazer todos os sedds
npx sequelize db:sedd:undo:all



//padrao mvc
m modelo
v vista
c controladora   faz o meio de campo entre o modelo e a vista

