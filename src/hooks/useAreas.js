import { useState, useEffect } from "react";

const API_BASE = process.env.API_BASE_URL || '/api';

export const useAreas = () => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/areas`)
      .then(res => res.json())
      .then(data => setSelected(data.selectedAreas))
      .catch(console.error);
  }, []);

  const saveToAPI = async (areas) => {
    try {
      await fetch(`${API_BASE}/areas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ selectedAreas: areas })
      });
    } catch (error) {
      console.error('Failed to save:', error);
    }
  };

  const toggleSelect = (id) => {
    const newSelected = selected.includes(id)
      ? selected.filter(item => item !== id)
      : [...selected, id];
    setSelected(newSelected);
    saveToAPI(newSelected);
  };

  return { selected, toggleSelect };
};
