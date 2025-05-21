import React from 'react';
// import APIAdapter from '../apiclient/APIAdapter';
import { Alert, Linking, Text } from 'react-native';
import Snackbar from 'react-native-snackbar';
// import { launchCamera, launchImageLibrary } from "react-native-image-picker";
// import PhotoEditor from "@baronha/react-native-photo-editor";
// import { pick, types } from "react-native-document-picker";
import ImagePicker from 'react-native-image-crop-picker';

import AppColors from './Colors';
import Config from 'react-native-config';
import ErrorConstants from './ErrorConstants';
import { pick, types } from '@react-native-documents/picker';

export const CommonFunction = {
  DEFAULT_STATUS: 1,
  SUCCESS: 2,
  ERROR: 3,
  printLogs: function (log: any) {
    if (Config.ENV === 'development') {
      console.log(log);
    }
  },
  showAlert: function (message: string) {
    Alert.alert('Alert!', message, [
      {
        text: 'OK',
        onPress: () => { },
        style: 'cancel',
      },
    ]);
  },

  openURI: async (url: string) => {
    await Linking.openURL(url).catch(err =>
      console.error("Couldn't load page", err),
    );
  },

  showSnackbar: function (message: string, status: number = 1) {
    var bgColor = '#313231';
    switch (status) {
      case 1:
        bgColor = '#313231';
        break;
      case 2:
        bgColor = 'green';
        break;
      case 3:
        bgColor = 'red';
        break;
    }
    Snackbar.show({
      text: message,
      duration: Snackbar.LENGTH_LONG,
      textColor: '#fff',
      backgroundColor: bgColor,
      numberOfLines: 3,
    });
  },

  isValidUrl(urlString: string) {
    var urlPattern = new RegExp(
      '^(https?:\\/\\/)?' + // validate protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // validate domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // validate OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // validate port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // validate query string
      '(\\#[-a-z\\d_]*)?$',
      'i',
    ); // validate fragment locator
    return !!urlPattern.test(urlString);
  },
  getSearchParamFromURL: (url: any, param: any) => {
    const include = url.includes(param);
    if (!include) return null;
    const params = url.split(/([&,?,=])/);
    const index = params.indexOf(param);
    const value = params[index + 2];
    return value;
  },
  // Function to get file extension from URL
  getFileExtension: (url: any) => {
    if (!url) {
      return null; // or throw an error or handle it according to your requirement
    }

    // Get the last part of the URL after the last dot
    const parts = url.split('.');
    if (parts.length === 1) {
      return ''; // URL has no extension
    }

    const extension = parts.pop();
    return extension;
  },
  stripHTMLAndEntities: (html?: string): string => {
    let text = html ?? ''; // fallback to empty string if undefined or null

    // Replace HTML line breaks with \n
    text = text.replace(/<br\s*\/?>/gi, '\n');

    // Optionally treat <p> as paragraph breaks
    text = text.replace(/<\/p>/gi, '\n');
    text = text.replace(/<p[^>]*>/gi, '');

    // Strip remaining tags
    text = text.replace(/<[^>]*>?/gm, '');

    // Decode basic entities
    const entityMap: { [key: string]: string } = {
      '&nbsp;': ' ',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&#39;': "'",
      '&ldquo;': '“',
      '&rdquo;': '”',
      '&lsquo;': '‘',
      '&rsquo;': '’',
      '&hellip;': '…',
    };

    text = text.replace(
      /&[a-zA-Z#0-9]+;/g,
      entity => entityMap[entity] || entity,
    );

    return text.trim();
  },

  // getImageSource: (fileUrl) => {
  //   switch (CommonFunction.getFileExtension(fileUrl)) {
  //     case "pdf":
  //       return ImageSource.icon_pdf;
  //     case "docx":
  //       return ImageSource.icon_doc;
  //     default:
  //       return ImageSource.icon_img;
  //   }
  // },

  calculateGST: (amount: any, percentage: any) => {
    return (amount * percentage) / 100;
  },
  generateColor: () => {
    const colors = [
      AppColors.appOrangeColor,
      'blue',
      'green',
      'purple',
      'wheat',
      'brown',
    ];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  },

  openGallery: async () => {
    try {
      const image = await ImagePicker.openPicker({
        mediaType: 'photo',
        quality: 0.5,
        multiple: false,
        cropping: false,
        includeBase64: true,
      });

      if (image.data) {
        // Calculate the size of the image in bytes
        const imageSize =
          image.data.length * (3 / 4) -
          (image.data.endsWith('==') ? 2 : image.data.endsWith('=') ? 1 : 0);
        const maxSize = 5 * 1024 * 1024; // 5 MB in bytes

        if (imageSize > maxSize) {
          Alert.alert(
            ErrorConstants.kErrorFileSize,
            ErrorConstants.kErrorFileSizeDesc,
          );
          return null;
        }
      }

      return { uri: image.path };
    } catch (error: any) {
      console.error('Image picker error>>>:', error);
      if (error.message.includes('cancelled')) {
        return null;
      } else {
        CommonFunction.showSnackbar('Unsupported format');
        return null;
      }
    }
  },

  openCamera: async () => {
    try {
      const image = await ImagePicker.openCamera({
        mediaType: 'photo',
        quality: 0.5,
        width: 300,
        height: 400,
        cropping: false,
        includeBase64: true,
      });

      if (image.data) {
        // Calculate the size of the image in bytes
        const imageSize =
          image.data.length * (3 / 4) -
          (image.data.endsWith('==') ? 2 : image.data.endsWith('=') ? 1 : 0);
        const maxSize = 5 * 1024 * 1024; // 5 MB in bytes

        if (imageSize > maxSize) {
          Alert.alert(
            ErrorConstants.kErrorFileSize,
            ErrorConstants.kErrorFileSizeDesc,
          );
          return null;
        }
      }

      return { uri: image.path };
    } catch (error: any) {
      console.error('Image picker error>>>:', error);
      if (error.message.includes('cancelled')) {
        return null;
      } else {
        CommonFunction.showSnackbar('Unsupported format');
        return null;
      }
    }
  },
  handleDocumentPicker: async (callback: any, isSave = false) => {
    try {
      await pick({
        allowMultiSelection: false,
        keepLocalCopy: 'documentDirectory',
        mode: isSave ? 'open' : 'import',
        type: [types.pdf, types.docx, types.doc],
      } as any)
        .then(res => {
          if (res && res.length > 0) {
            // tell the user they selected a file that is not a pdf or docx

            const file = res[0];
            const fileSize = file.size;

            // Define the maximum file size (e.g., 5MB)
            const maxSize = 5 * 1024 * 1024; // 5 MB in bytes

            if (fileSize !== null && fileSize > maxSize) {
              Alert.alert(
                ErrorConstants.kErrorFileSize,
                ErrorConstants.kErrorFileSizeDesc,
              );
            } else {
              callback(true, { uri: res[0].uri, fileName: res[0].name });
            }
          } else {
            callback(false, 'Please select valid document file.');
          }
        })
        .catch(err => {
          callback(false, err.message);
        });
      // do something with the picked file
    } catch (err) {
      // see error handling
      CommonFunction.printLogs('Error: ' + err);
    }
  },

  timeAgo: (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    const intervals = [
      { label: 'year', seconds: 31536000 },
      { label: 'month', seconds: 2592000 },
      { label: 'week', seconds: 604800 },
      { label: 'day', seconds: 86400 },
      { label: 'hour', seconds: 3600 },
      { label: 'minute', seconds: 60 },
      { label: 'second', seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(seconds / interval.seconds);
      if (count >= 1) {
        if (interval.label === 'day' && count === 1) return 'yesterday';
        return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
      }
    }

    return 'just now';
  },
};

export default CommonFunction;
