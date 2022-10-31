import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.css']
})
export class FilterComponentComponent implements OnInit {
   

    employees=[
      'Syed Abbas',
'Catherine Abel',
'Kim Abercrombie',
'Hazem Abolrous',
'Sam Abolrous',
'Humberto Acevedo',
'Gustavo Achong',
'Pilar Ackerman',
'Aaron Adams',
'Adam Adams',
'Alex Adams',
'Alexandra Adams',
'Allison Adams',
'Amanda Adams',
'Amber Adams',
'Andrea Adams',
'Angel Adams',
'Bailey Adams',
'Ben Adams',
'Blake Adams',
'Carla Adams',
'Carlos Adams',
'Charles Adams',
'Chloe Adams',
'Connor Adams',
'Courtney Adams',
'Dalton Adams',
'Devin Adams',
'Eduardo Adams',
'Edward Adams',
'Elijah Adams',
'Eric Adams',
'Evan Adams',
'Fernando Adams',
'Frances Adams',
'Gabriel Adams',
'Gabriella Adams',
'Gabrielle Adams',
'Hailey Adams',
'Haley Adams',
'Hunter Adams',
'Ian Adams',
'Isaac Adams',
'Isabella Adams',
'Isaiah Adams',
'Jack Adams',
'Jackson Adams',
'Jada Adams',
'James Adams',
'Jason Adams'
]

  constructor() { }

  ngOnInit(): void {
  }

}
