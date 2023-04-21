package Exercicios_Basicos;

import java.util.Scanner;

public class Exercicio3 {

	public static void main(String[] args) {
		 double h = 0;

	     Scanner sc = new Scanner(System.in);
	     double n = sc.nextDouble();

	     for (double i = 1; i <= n; i++) {
	         double sum= 1/i;
	       h+=sum;
	       
	     //TODO: Calcule o valor de H de forma que resulte na soma dos termos:
	          
	      }
	     //TODO: Imprima a soma dos termos, considerando um resultado com duas casas decimais:
	      System.out.printf("%.0f%n",h);
	}

}
