package Exercicios_Basicos;

import java.util.Scanner;

public class Exercicio2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner leitor = new Scanner(System.in);
	        int cont = 0;
	        double media;
	        double x;
	        double soma = 0;

	        //TODO: Implemente as condições adequadas para obter a quantidade
	        //de valores positivos e a média dos valores positivos:
	        for (int i = 0; i < 6; i++) {
	            x = leitor.nextDouble();
	            if (x >=0) {
	                soma += x;
	                cont++;
	            }
	        }

	        media = soma / cont;
	        System.out.println(cont + " valores positivos");
	        System.out.printf("%.1f%n", media);
	}

}
