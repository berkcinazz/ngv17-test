import { Component, OnInit, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-component2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component2.html',
  styleUrl: './component2.css'
})
export class Component2 implements OnInit {
  countTracker = computed(() => this.signalService.count());
  items = []
  constructor(private signalService : SignalService){}

  ngOnInit() {
    
  }


  increase(){
    this.signalService.count.set(this.signalService.count() + 1);
  }

  decrease(){
    this.signalService.count.set(this.signalService.count() - 1);
  }
}
