export interface EnergyPlan {
    id: string;
    name: string;
    provider: string;
    type: 'solar' | 'wind' | 'hydro';
    price: number;
    renewable_percentage: number;
    contract_length: number;
    description: string;
  }
  
  export interface Provider {
    id: string;
    name: string;
    logo: string;
    types: Array<'solar' | 'wind' | 'hydro'>;
    rating: number;
    location: string;
  }