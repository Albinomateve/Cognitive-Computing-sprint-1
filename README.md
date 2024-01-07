# Verificador de PIN
## Descrição do Projeto
Este projecto consiste em um sistema verificador de PIN (Personal Identification Number) desenvolvido em JavaScript. O sistema interage com o usuário, fornecendo dicas sobre se o número inserido está próximo, maior ou menor do que o valor esperado.

## Funcionamento: 

- O programa solicitará ao usuário que insira um número de pelo menos quatro dígitos.

- O sistema verificará se o número inserido é maior, menor ou igual ao valor esperado.

- O sistema verificará se o número esta corecto ou não, estiver correto, será exibida uma mensagem de parabéns.

- Caso contrário, o programa informará se o próximo valor deve ser maior, muito maior, menor ou muito menor do que o informado.

- O usuário terá a oportunidade de fazer múltiplas tentativas.

## Apresentação do sistema
 A presentaca do sistema pode ser vista no link abaixo:

 - https://www.loom.com/share/44f6291fff3e45e7851e0c6f64a0c836?sid=0cf0149e-bc00-4377-bd66-a82551cab251

  
## Dicas ao Usuário:

O sistema fornece dicas claras e amigáveis para orientar o usuário durante o processo.

## Desafios encotrados

- Ao criar a função compareNumbers, eu encontrei dificuldades para definir claramente quando um número é significativamente maior ou menor em comparação com um número base já definido. 

## Processo de desenvolvimento

Para simplificar a questão de comparação dos números, pensei em usar um limite, uma espécie de fronteira. Se a diferença entre o número que o usuário inseriu e o número base for maior que esse limite, nós dizemos que o número é muito maior ou muito menor, dependendo da situação. Ao estabelecer esse limite, a função agora consegue identificar quando um número é considerado muito maior ou muito menor, tornando o processo de comparação mais transparente. 

