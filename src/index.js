// index.js (ESM)
import enquirer from 'enquirer';
const { Select } = enquirer;

class TerminalRPG {
  constructor() {
    this.isRunning = true; // corrigido
  }

  async start() {          // agora async
    console.clear();
    console.log('RPG TERMINAL');
    await this.showMainMenu(); // await
  }

  async showMainMenu() {   // agora async
    while (this.isRunning) {
      console.log('Menu Principal');

      const select = new Select({
        name: 'action',
        message: 'Escolha uma opção...', // corrigido
        choices: ['Opção 1', 'Opção 2', 'Opção 3', 'Sair']
      });

      const choice = await select.run(); // 👈 pega o valor escolhido

      switch (choice) {
        case 'Opção 1':
          console.log('Você escolheu:', choice);
          break;

        case 'Opção 2':
          console.log('Você escolheu:', choice);
          break;

        case 'Opção 3':
          console.log('Você escolheu:', choice);
          break;

        case 'Sair':
          console.log('Saindo…');
          this.isRunning = false; // sai do loop
          break;

        default:
          console.log('Opção inválida');
      }

      // opcional: uma pequena pausa pra deixar a UX suave
      await new Promise(r => setTimeout(r, 100));
    }
  }
}

const game = new TerminalRPG(); // () por clareza
game.start();
