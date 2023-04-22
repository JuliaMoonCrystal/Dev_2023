package Exercicios_Basicos;

import java.util.Scanner;

public class Exercicio5 {

	public static void main(String[] args) {
		 Scanner leitor = new Scanner(System.in);
	        int N = leitor.nextInt();
	        int proximo, anterior = 0, atual = 1;
	        for (int i = 1; i <= N; i++) {
	            if (i == N) System.out.println(anterior);
	            else System.out.print(anterior + " ");
	            proximo = anterior + atual;
	            anterior = atual;
	            atual = proximo;
	        }
	}

}
