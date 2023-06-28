import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less']
})
export class ServicesComponent implements OnInit {

  private bloodletting =  { 
    title: 'Bloodletting',
    isVideo: false,
    images: [
      '../../assets/services/Blood Letting01.jpg',
      '../../assets/services/Blood Letting02.jpg',
      '../../assets/services/Blood Letting03.jpg',
      '../../assets/services/Blood Letting04.jpg',
      '../../assets/services/Blood Letting05.jpg',
      '../../assets/services/Blood Letting06.jpg'
    ]
  };

  private kidney =  { 
    title: 'Kidney Talk',
    isVideo: false,
    images: [
      '../../assets/services/Kiney Talk poster01.jpg',
    ]
  };

  private antipolio = { 
    title: 'ANTI-POLIO SABAYANG PATAK',
    isVideo: false,
    images: [
      '../../assets/services/ANTI POLIO SABAYANG PATAK01.jpg',
      '../../assets/services/ANTI POLIO SABAYANG PATAK02.jpg',
      '../../assets/services/ANTI POLIO SABAYANG PATAK03.jpg',
      '../../assets/services/ANTI POLIO SABAYANG PATAK04.jpg',
      '../../assets/services/ANTI POLIO SABAYANG PATAK05.jpg',
      '../../assets/services/ANTI POLIO SABAYANG PATAK06.jpg',
    ]
  };

  private antirabies = {
    title: 'Anti-Rabies',
    isVideo: false,
    images: [
      '../../assets/services/Anti-Rabbies01.jpg',
      '../../assets/services/Anti-Rabbies02.jpg',
      '../../assets/services/Anti-Rabbies03.jpg',
      '../../assets/services/Anti-Rabbies04.jpg',
      '../../assets/services/Anti-Rabbies05.jpg',
      '../../assets/services/Anti-Rabbies06.jpg',
    ]
  };

  private dentalmissions = {
    title: 'Dental Mission',
    isVideo: false,
    images: [
      '../../assets/services/Dental Mission01.jpg',
      '../../assets/services/Dental Mission02.jpg',
      '../../assets/services/Dental Mission03.jpg',
      '../../assets/services/Dental Mission04.jpg',
      '../../assets/services/Dental Mission05.jpg',
      '../../assets/services/Dental Mission06.jpg',
    ]
  };

  private disasterresponse = {
    title: 'Disaster Response',
    images: [
      '../../assets/services/Disaster Response01.jpg',
      '../../assets/services/Disaster Response02.jpg',
      '../../assets/services/Disaster Response03.jpg',
      '../../assets/services/Disaster Response04.jpg',
      '../../assets/services/Disaster Response05.jpg',
    ]
  };

  private distribution = {
    title: 'Distribution of School Supplies',
    isVideo: false,
    images: [
      '../../assets/services/Distribution of school supplies01.jpg',
      '../../assets/services/Distribution of school supplies02.jpg',
      '../../assets/services/Distribution of school supplies03.jpg',
      '../../assets/services/Distribution of school supplies04.jpg',
      '../../assets/services/Distribution of school supplies05.jpg',
      '../../assets/services/Distribution of school supplies06.jpg',
    ]
  };

  private estero = {
    title: 'Estero Clean-Up',
    isVideo: false,
    images: [
      '../../assets/services/Estero Clean Up01.jpg',
      '../../assets/services/Estero Clean Up02.jpg',
      '../../assets/services/Estero Clean Up03.jpg',
      '../../assets/services/Estero Clean Up04.jpg',
      '../../assets/services/Estero Clean Up05.jpg',
      '../../assets/services/Estero Clean Up06.jpg'
    ]
  };

  private shoebox = {
    title: 'Knowledge in a Shoebox',
    isVideo: false,
    images: [
      '../../assets/services/Knowledge in a Shoebox01.jpg',
      '../../assets/services/Knowledge in a Shoebox02.jpg',
      '../../assets/services/Knowledge in a Shoebox03.jpg',
      '../../assets/services/Knowledge in a Shoebox04.jpg',
      '../../assets/services/Knowledge in a Shoebox05.jpg',
      '../../assets/services/Knowledge in a Shoebox06.jpg'
    ]
  };

  private linaw = {
    title: 'Oplan Linaw',
    isVideo: false,
    images: [
      '../../assets/services/Oplan Linaw01.jpg',
      '../../assets/services/Oplan Linaw02.jpg',
      '../../assets/services/Oplan Linaw03.jpg',
      '../../assets/services/Oplan Linaw04.jpg',
      '../../assets/services/Oplan Linaw05.jpg',
      '../../assets/services/Oplan Linaw06.jpg'
    ]
  };

  private scholarship = {
    title: 'SCHOLARSHIP FOR PRE-SCHOOL WITH OSPAS ACADEMY',
    isVideo: false,
    images: [
      '../../assets/services/SCHOLARSHIP FOR PRE-SCHOOL WITH OSPAS ACADEMY01.jpg',
      '../../assets/services/SCHOLARSHIP FOR PRE-SCHOOL WITH OSPAS ACADEMY02.jpg',
      '../../assets/services/SCHOLARSHIP FOR PRE-SCHOOL WITH OSPAS ACADEMY03.jpg',
      '../../assets/services/SCHOLARSHIP FOR PRE-SCHOOL WITH OSPAS ACADEMY04.jpg',
    ]
  };

  private training = {
    title: 'TRAINING ON CARPENTRY',
    isVideo: false,
    images: [
      '../../assets/services/TRAINING ON CARPENTRY01.jpg',
      '../../assets/services/TRAINING ON CARPENTRY02.jpg',
      '../../assets/services/TRAINING ON CARPENTRY03.jpg',
      '../../assets/services/TRAINING ON CARPENTRY04.jpg',
      '../../assets/services/TRAINING ON CARPENTRY05.jpg',
      '../../assets/services/TRAINING ON CARPENTRY06.jpg',
    ]
  };

  private paaral = {
    title: 'PAARAL AT PAG-ASA',
    isVideo: true,
    images: [
      '../../assets/services/paaral.mp4',
    ]
  };
  
  item: any;

  constructor(private readonly route: ActivatedRoute) {
    this.item = this.shoebox;
   }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const param = params['service'].toString();

      switch(param) {
        case 'paaral':
            this.item = this.paaral;
            break;
        case 'bloodletting':
            this.item = this.bloodletting;
            break;
        case 'antipolio':
            this.item = this.antipolio;
            break;
        case 'antirabies':
          this.item = this.antirabies;
          break;
        case 'dentalmissions':
          this.item = this.dentalmissions;
          break;
        case 'disasterresponse':
          this.item = this.disasterresponse;
          break;
        case 'distribution':
          this.item = this.distribution;
          break;
        case 'estero':
          this.item = this.estero;
          break;
        case 'shoebox':
            this.item = this.shoebox;
            break;
        case 'linaw':
          this.item = this.linaw;
          break;
        case 'scholarship':
          this.item = this.scholarship;
          break;
        case 'training':
          this.item = this.training;
          break;
          case 'kidney':
            this.item = this.kidney;
            break;
      }

    });
  }
}
