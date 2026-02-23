// services/userService.js
import supabase from './supabaseClient';

export async function getUserLvl(telegram_id) {
    try {
      const { data, error } = await supabase
        .from('users')
        .select('lvl')
        .eq('telegram_id', telegram_id)
        .single(); // single() вернёт один объект, если есть
  
      if (error) {
        console.error('Supabase error:', error.message);
        return null;
      }
  
      if (!data) {
        console.warn('No user found with telegram_id:', telegram_id);
        return null;
      }
  
      return data.lvl;
    } catch (err) {
      console.error('Unexpected error fetching user lvl:', err);
      return null;
    }
  }