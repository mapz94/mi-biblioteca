package com.example.library;
import java.util.Scanner;
import java.time.LocalDate;

public class MperezJavaProject {
    
    private static Book CreateBook(){
        Book book = new Book("La Caperucita Roja", new ISBN());
        return book;
    }
    private static void example(){
        Book book = CreateBook();  
        Scanner sc = new Scanner(System.in);         
                
        System.out.println("Favor ingresar rut de nuevo usuario: ");
        String userRut = sc.next();
        System.out.println("Favor ingresar nombre de nuevo usuario: ");
        String userName = sc.next();
        System.out.println("Favor ingresar contraseña de nuevo usuario: ");
        String userPass = sc.next();
        System.out.println("Favor ingresar correo de nuevo usuario: ");
        String userEmail = sc.next();
        
        User user = new User(userRut,userName,userPass,userEmail);
        LocalDate today = LocalDate.now();
        LocalDate expire = today.plusDays(5);
        
        Lending lend = new Lending(user,book,today,expire);
        
        String[] array =  lend.GetInfo();
        System.out.println("----------");
        for (int i = 0; i < array.length;i++)
            System.out.println(array[i]);
        System.out.println("----------");
        
    }
    public static void main(String[] args) {
        while(true){
            example();
            break;
        }
    }
}
    

