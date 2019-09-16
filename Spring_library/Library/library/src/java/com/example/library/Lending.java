package com.example.library;
import java.time.LocalDate;

public class Lending {
    private User user;
    private BibliographicalMaterial bibliographicalMaterial;
    private LocalDate lendingDate;
    private LocalDate expirationDate;  
    
    public Lending(User user, BibliographicalMaterial bibliographicalMaterial,
                    LocalDate lendingDate, LocalDate expirationDate){
        this.user = user;
        this.bibliographicalMaterial = bibliographicalMaterial;
        this.lendingDate = lendingDate;
        this.expirationDate = expirationDate;
    }
    
    public String[] GetInfo(){
        String[] info = new String[]{user.GetName(),
                                    bibliographicalMaterial.GetTitle(),
                                    lendingDate.toString(),
                                    expirationDate.toString()};
        return info;
    }
}
