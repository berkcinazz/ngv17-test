import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignalService } from '../../services/signal.service';

@Component({
  selector: 'app-component1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component1.html',
  styleUrl: './component1.css'
})
export class Component1 {
  countTracker = computed(() => this.signalService.count());
  constructor(private signalService : SignalService){}

  ngOnInit() {
    
  }
}
