import React from 'react';
import LocalStore from '../storage/LocalStore';
import APIConstant from '../constant/APIConstant';
import CommonFunction from '../constant/CommonFunction';

const APIAdapter = {
  authToken: '',
  refToken: '',
  userId: '',
  baseURL: APIConstant.BASE_URL,

  Authenticate: async function (method: string, params: any) {
    CommonFunction.printLogs(this.baseURL + method);
    CommonFunction.printLogs(JSON.stringify(params));
    try {
      const response = await fetch(this.baseURL + method, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      });
      CommonFunction.printLogs(response);
      if (response.status == 200) {
        const json = await response.json();
        CommonFunction.printLogs('API RESPONSE :- ');
        CommonFunction.printLogs('API RESPONSE :- ' + json);
        CommonFunction.printLogs(json);
        return {
          success: json.Result.isSuccess,
          data: json.Result.data,
          message: json.Result.message,
        };
      } else {
        const json = await response.json();
        CommonFunction.printLogs(json);
        return {
          success: false,
          data: null,
          message: json.Result.message,
        };
      }
    } catch (error) {
      CommonFunction.printLogs('API call failed');
      return {
        success: false,
        data: null,
        message: 'Something went wrong, please try again later.',
      };
    }
  },

  //===================================================================================================================================
  RefreshToken: async function (method: string) {
    CommonFunction.printLogs('APIAdapterAuthToken' + APIAdapter.authToken);
    CommonFunction.printLogs('APIAdapterUserId' + APIAdapter.userId);
    CommonFunction.printLogs('APIAdapterRefToken' + APIAdapter.refToken);
    // const token = await NotificationService.getToken();
    // CommonFunction.printLogs('Device Token :::::::::       ' + token);
    CommonFunction.printLogs(this.baseURL + method);
    try {
      const response = await fetch(this.baseURL + method, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          // deviceToken: token,
          AccessToken: APIAdapter.authToken,
          refreshToken: APIAdapter.refToken,
        }),
      });
      CommonFunction.printLogs('response.status' + response.status);
      if (response.status == 200) {
        const json = await response.json();
        CommonFunction.printLogs(json);
        return {
          success: !json.HasErrors,
          data: json.Result,
          message: json.Errors,
        };
      } else {
        return {
          success: false,
          data: null,
          message:
            'Something went wrong, please try again later. Status: ' +
            response.status,
        };
      }
    } catch (error) {
      CommonFunction.printLogs('API call failed RefreshToken');

    }
  },

  //=====================================================================================================================================
  POST: async function (method: string, params: any): Promise<any> {
    CommonFunction.printLogs(this.baseURL + method);
    CommonFunction.printLogs(params);
    try {
      CommonFunction.printLogs('entered for API call');
      const response = await fetch(this.baseURL + method, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.authToken,
        },
        body: JSON.stringify(params),
      });
      CommonFunction.printLogs('API Status: ' + response.status);
      CommonFunction.printLogs('API Response: ' + JSON.stringify(response));
      if (response.status == 200) {
        const json = await response.json();
        CommonFunction.printLogs('API Response: ' + JSON.stringify(json));
        if (json.StatusCode == '403') {
          return { success: false, data: json.Result, message: json.Errors };
        }
        return {
          success: json.Result.isSuccess,
          data: json.Result.data,
          message: json.Result.message,
        };
      } else {
        const json = await response.json();
        CommonFunction.printLogs(json);
        return { success: false, data: null, message: json.Errors[0].Message };
      }
    } catch (error) {
      CommonFunction.printLogs('API call failed post');
      return {
        success: false,
        data: null,
        message: 'Something went wrong, please try again later.',
      };
    }
  },

  //=====================================================================================================================================
  POST_NO_PARAMS: async function (method: string): Promise<any> {
    CommonFunction.printLogs(this.baseURL + method);
    try {
      CommonFunction.printLogs('entered for API call');
      const response = await fetch(this.baseURL + method, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.authToken,
        },
        // body: JSON.stringify(params),
      });
      CommonFunction.printLogs('API Status: ' + response.status);
      CommonFunction.printLogs('API Response: ' + JSON.stringify(response));
      if (response.status == 200) {
        const json = await response.json();
        CommonFunction.printLogs('API Response: ' + JSON.stringify(json));
        if (json.StatusCode == '403') {
          return { success: false, data: json.Result, message: json.Errors };
        }
        return {
          success: !json.HasErrors,
          data: json.Result,
          message: json.Errors,
        };
      } else {
        const json = await response.json();
        CommonFunction.printLogs(json);
        return { success: false, data: null, message: json.Errors[0].Message };
      }
    } catch (error) {
      CommonFunction.printLogs('API call failed post');
      return {
        success: false,
        data: null,
        message: 'Something went wrong, please try again later.',
      };
    }
  },

  //========================================================================================================================================
  UPLOAD: async function (
    method: string,
    params: any,
    files: any,
  ): Promise<any> {
    try {
      CommonFunction.printLogs(this.baseURL + method);
      CommonFunction.printLogs('UPLOAD' + params);
      var formData = new FormData();
      for (var property in params) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(params[property]);
        CommonFunction.printLogs('key' + encodedKey);
        CommonFunction.printLogs('value' + encodedValue);
        CommonFunction.printLogs(
          `Data log : Key ->  ${property} , Value : ${params[property]}`,
        );
        formData.append(property, params[property]);
      }
      CommonFunction.printLogs(`Image log : Key -> ${files.length}`);
      if (files.length > 0) {
        CommonFunction.printLogs(
          `Else part : Key -> ${JSON.stringify(element)}`,
        );
        for (var index = 0; index < files.length; index++) {
          var element = files[index];
          CommonFunction.printLogs(
            `XXXXXXXXXXXXPart : Key -> ${element.keyName}  ${element.fileUri}  ${element.fileName}`,
          );
          if (
            CommonFunction.getFileExtension(element.fileName) == 'jpg' ||
            CommonFunction.getFileExtension(element.fileName) == 'png' ||
            CommonFunction.getFileExtension(element.fileName) == 'jpeg'
          ) {
            CommonFunction.printLogs(
              `If Part : Key -> ${element.keyName}  ${element.fileUri}  ${element.fileName}`,
            );
            formData.append(element.keyName, {
              uri: element.fileUri, // Use the value directly
              type: 'image/jpeg',
              name: element.fileName,
            });
          } else {
            CommonFunction.printLogs(
              `Else part : Key -> ${element.keyName}  ${element.fileUri}  ${element.fileName}`,
            );
            formData.append(element.keyName, {
              uri: element.fileUri, // Use the value directly
              type: `application/${CommonFunction.getFileExtension(
                element.fileName,
              )}`,
              name: element.fileName,
            });
          }
        }
      }
      const response = await fetch(this.baseURL + method, {
        method: 'POST',
        headers: {
          Authorization: 'Bearer ' + this.authToken,
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });
      if (response.status == 200) {
        const json = await response.json();
        CommonFunction.printLogs(json);
        if (json.statusCode == '403') {
          return { success: false, data: json.Result, message: json.Errors };
        }
        return {
          success: json.Result.isSuccess,
          data: json.Result.data,
          message: json.Result.message,
        };
      } else {
        const json = await response.json();
        CommonFunction.printLogs(json);
        return {
          success: false,
          data: null,
          message:
            'Something went wrong, please try again later. Status: ' +
            json['error_description'],
        };
      }
    } catch (error) {
      CommonFunction.printLogs('API call failed');
      return {
        success: false,
        data: null,
        message: 'Something went wrong, please try again later.',
      };
    }
  },
  GET: async function (method: string): Promise<any> {
    CommonFunction.printLogs(this.baseURL + method);
    try {
      CommonFunction.printLogs('entered for API call');
      const response = await fetch(this.baseURL + method, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + this.authToken,
        },
        // body: JSON.stringify(params),
      });

      CommonFunction.printLogs('API Response: ' + JSON.stringify(response));
      if (response.status == 200) {
        const json = await response.json();
        CommonFunction.printLogs('API Response: ' + JSON.stringify(json));
        if (json.StatusCode == '403') {
          return { success: false, data: json.results, message: json.Errors };
        }
        return {
          success: !json.HasErrors,
          data: json.results,
          message: json.Errors,
        };
      } else {
        const json = await response.json();
        CommonFunction.printLogs(json);
        return { success: false, data: null, message: json.Errors[0].Message };
      }
    } catch (error) {
      CommonFunction.printLogs('API call failed post');
      return {
        success: false,
        data: null,
        message: 'Something went wrong, please try again later.',
      };
    }
  },

};

export default APIAdapter;

// export const blobToData = (blob: any) => {
//   return new Promise(resolve => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result);
//     reader.readAsText(blob);
//   });
// };
