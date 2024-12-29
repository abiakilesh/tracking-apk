import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import { MemoEntry } from './types';
import { MemoForm } from './components/MemoForm';
import { MemoTable } from './components/MemoTable';

const initialFormState: MemoEntry = {
  id: Date.now(),
  startingDate: '',
  startingKms: '',
  startingDieselLiter: '',
  startingDieselAmount: '',
  startingMileage: '',
  endingDate: '',
  endingKms: '',
  endingDieselLiter: '',
  endingDieselAmount: '',
  endingMileage: '',
  name1: '',
  name2: '',
  place: '',
  laborCharge: '',
  drSalary: '',
  rtoPC: '',
  totalCollection: '',
  totalLoss: '',
  profit: ''
};

function App() {
  const [entries, setEntries] = useState<MemoEntry[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<MemoEntry>(initialFormState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEntries(prev => [...prev, { ...formData, id: Date.now() }]);
    setFormData(initialFormState);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-green-600">MEMO</h1>
          
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-600"
            >
              <PlusCircle size={20} />
              Add New
            </button>
          </div>

          {showForm && (
            <MemoForm
              formData={formData}
              onClose={() => setShowForm(false)}
              onSubmit={handleSubmit}
              onChange={handleInputChange}
            />
          )}

          <MemoTable entries={entries} />
        </div>
      </div>
    </div>
  );
}

export default App;