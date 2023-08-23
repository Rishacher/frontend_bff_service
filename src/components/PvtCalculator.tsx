// PvtCalculator.tsx
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { sendPvtDataStart, sendPvtDataSuccess, sendPvtDataFailure } from '../features/pvt/pvtSlice';
import axios from 'axios';

interface MixProperties {
    MuMix: number;
    QMix: number;
    RhoMix: number;
  }  

interface PvtParams {
  P: number;
  T: number;
  GammaOil: number;
  GammaGas: number;
  GammaWat: number;
  Wct: number;
  Rp: number;
  QLiq: number;
}

const PvtCalculator: React.FC = () => {
  const dispatch = useAppDispatch();
//   const result = useAppSelector((state) => state.pvt.result);
  const isLoading = useAppSelector((state) => state.pvt.isLoading);
  const error = useAppSelector((state) => state.pvt.error);

  const [formData, setFormData] = useState<PvtParams>({
    P: 0,
    T: 0,
    GammaOil: 0,
    GammaGas: 0,
    GammaWat: 0,
    Wct: 0,
    Rp: 0,
    QLiq: 0,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: parseFloat(value),
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
        dispatch(sendPvtDataStart());
        await axios.post('/api/calculator', formData);
        // Операция выполнена успешно, можно выполнить какие-либо дополнительные действия
        dispatch(sendPvtDataSuccess({ MuMix: 0, QMix: 0, RhoMix: 0 }));
      } catch (error: any) {
        dispatch(sendPvtDataFailure(error.message as string));
      }
};

//     try {
//       dispatch(sendPvtDataStart());
//       const response = await axios.post<MixProperties>('/api/calculator', formData);
//       const data: MixProperties = response.data;
//       dispatch(sendPvtDataSuccess(response.data));
//     } catch (error: any) {
//       dispatch(sendPvtDataFailure(error.message as string));
//     }
//   };

  return (
    <div className="pvt-calculator">
      <h2>PVT Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="P">P:</label>
          <input type="number" id="P" name="P" value={formData.P} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="T">T:</label>
          <input type="number" id="T" name="T" value={formData.T} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="GammaOil">GammaOil:</label>
          <input type="number" id="GammaOil" name="GammaOil" value={formData.GammaOil} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="GammaGas">GammaGas:</label>
          <input type="number" id="GammaGas" name="GammaGas" value={formData.GammaGas} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="GammaWat">GammaWat:</label>
          <input type="number" id="GammaWat" name="GammaWat" value={formData.GammaWat} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="Wct">Wct:</label>
          <input type="number" id="Wct" name="Wct" value={formData.Wct} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="Rp">Rp:</label>
          <input type="number" id="Rp" name="Rp" value={formData.Rp} onChange={handleInputChange} />
        </div>
        <div>
          <label htmlFor="QLiq">QLiq:</label>
          <input type="number" id="QLiq" name="QLiq" value={formData.QLiq} onChange={handleInputChange} />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Calculating...' : 'Calculate'}
        </button>
      </form>

      {error && <p>Error: {error}</p>}
{/* 
      {result && (
        <div>
          <h3>Result:</h3>
          <p>MuMix: {result.MuMix}</p>
          <p>QMix: {result.QMix}</p>
          <p>RhoMix: {result.RhoMix}</p>
        </div>
      )} */}
    </div>
  );
};

export default PvtCalculator;
