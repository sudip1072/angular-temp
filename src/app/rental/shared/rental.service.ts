import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';

@Injectable()
export class RentalService {

    private rentals: Rental[] = 
    [
        {
      id: "1",
      title:"White House",
      city:"Delhi",
      street:"Greater Kailash",
      category:"apartment",
      image:"http://via.placeholder.com/350x250",
      bedrooms:3,
      description:"very nice apartment",
      dailyRate:3400,
      shared:false,
      createdAt:"24/12/2017"
    
      },
    
      {
        id: "2",
        title:"Hense House",
        city:"Delhi",
        street:"Nehru Place",
        category:"apartment",
        image:"http://via.placeholder.com/350x250",
        bedrooms:3,
        description:"very nice apartment",
        dailyRate:4000,
        shared:false,
        createdAt:"04/02/2016"
      
        },
      
        {
          id: "3",
          title:"Ellite Mension",
          city:"Gurgaon",
          street:"sector-18",
          category:"house",
          image:"http://via.placeholder.com/350x250",
          bedrooms:3,
          description:"very nice house",
          dailyRate:6000,
          shared:false,
          createdAt:"20/10/2016"
        
          },
        
          {
            id: "4",
            title:"Times Square ",
            city:"Noida",
            street:"sector-15",
            category:"condo",
            image:"http://via.placeholder.com/350x250",
            bedrooms:3,
            description:"very nice house",
            dailyRate:5000,
            shared:false,
            createdAt:"22/08/2017"
          
            }
          
    ];


public getRentalById(rentalId: string): Observable<Rental> {

return new Observable<Rental>((observer)=>{

setTimeout(()=>{
const foundRental = this.rentals.find((rental)=>{
return rental.id == rentalId;
});
observer.next(foundRental);
},500)
});
}

public getRentals(): Observable<Rental[]> {
return new Observable<Rental[]>((observer)=>{

  setTimeout(()=>{
   observer.next(this.rentals);
  }, 1000);
});

}



}