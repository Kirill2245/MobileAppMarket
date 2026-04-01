import React, { useState } from 'react';
import {
    ActivityIndicator,
    Button,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

function Test(): React.JSX.Element {
  const [response, setResponse] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // Определяем базовый URL в зависимости от платформы
  const getBaseUrl = () => {
    if (Platform.OS === 'android') {
      return 'http://10.0.2.2:80'; // Для Android эмулятора
    }
    return 'http://localhost:80'; // Для iOS симулятора или физического устройства
  };

  const testPing = async () => {
    setLoading(true);
    setError('');
    setResponse('');

    try {
      const url = `${getBaseUrl()}/api/user-profile/test`;
      console.log('Запрос к:', url); // Для отладки

      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!result.ok) {
        throw new Error(`HTTP error! status: ${result.status}`);
      }

      const text = await result.text();
      setResponse(text);
      console.log('Ответ:', text);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Неизвестная ошибка';
      setError(errorMessage);
      console.error('Ошибка:', errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тест связи с бэком</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Платформа: {Platform.OS}
        </Text>
        <Text style={styles.infoText}>
          URL: {getBaseUrl()}/api/user-profile/test
        </Text>
      </View>

      <Button
        title="Проверить соединение"
        onPress={testPing}
        disabled={loading}
      />

      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.loadingText}>Отправка запроса...</Text>
        </View>
      )}

      {response !== '' && (
        <View style={styles.successContainer}>
          <Text style={styles.successTitle}>✅ Успешный ответ:</Text>
          <Text style={styles.responseText}>{response}</Text>
        </View>
      )}

      {error !== '' && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>❌ Ошибка:</Text>
          <Text style={styles.errorText}>{error}</Text>
          <Text style={styles.hintText}>
            Подсказки:
            {'\n'}
            1. Убедитесь, что бэк запущен (http://localhost:4000)
            {'\n'}
            2. Для Android эмулятора используйте 10.0.2.2 вместо localhost
            {'\n'}
            3. Проверьте CORS в бэке
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  infoContainer: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  loadingContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  successContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f5e9',
    borderRadius: 8,
  },
  successTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  responseText: {
    fontSize: 14,
    color: '#1e4620',
    fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
  },
  errorContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ffebee',
    borderRadius: 8,
  },
  errorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#c62828',
    marginBottom: 10,
  },
  errorText: {
    fontSize: 14,
    color: '#b71c1c',
    marginBottom: 10,
  },
  hintText: {
    fontSize: 12,
    color: '#666',
    marginTop: 10,
  },
});

export default Test;