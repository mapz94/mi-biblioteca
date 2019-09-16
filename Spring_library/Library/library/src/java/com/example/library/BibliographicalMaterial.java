package com.example.library;
import java.time.LocalDate;

public abstract class BibliographicalMaterial {
    private int id_bm;
    private String title;
    private String category;
    private LocalDate published_date; 
    
    public BibliographicalMaterial(int id_bm, String title,	String category,
                                   LocalDate published_date){
        this.id_bm = id_bm;
        this.title = title;
        this.category = category;
        this.published_date = published_date;
    }

    public String[] GetInfo(){
        
    }

}
