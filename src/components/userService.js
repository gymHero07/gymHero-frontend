// services/userService.js
import supabase from './supabaseClient';

export async function getUserLvl(telegram_id) {
  const { data, error } = await supabase
    .from('users')
    .select('lvl')
    .eq('telegram_id', telegram_id)
    .single(); // single() вернёт один объект, если есть

  if (error) {
    console.error('Error fetching user lvl:', error);
    return null;
  }

  return data?.lvl ?? null;
}