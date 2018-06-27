
declare class GNSBeaconStrategy extends NSObject implements NSCopying {

	static alloc(): GNSBeaconStrategy; // inherited from NSObject

	static new(): GNSBeaconStrategy; // inherited from NSObject

	static strategy(): GNSBeaconStrategy;

	static strategyWithParamsBlock(paramsBlock: (p1: GNSBeaconStrategyParams) => void): GNSBeaconStrategy;

	readonly allowInBackground: boolean;

	readonly includeIBeacons: boolean;

	readonly lowPowerPreferred: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GNSBeaconStrategyParams extends NSObject {

	static alloc(): GNSBeaconStrategyParams; // inherited from NSObject

	static new(): GNSBeaconStrategyParams; // inherited from NSObject

	allowInBackground: boolean;

	includeIBeacons: boolean;

	lowPowerPreferred: boolean;
}

declare const enum GNSDeviceTypes {

	kGNSDeviceUsingNearby = 1,

	kGNSDeviceBLEBeacon = 2
}

declare const enum GNSDiscoveryMediums {

	kGNSDiscoveryMediumsAudio = 1,

	kGNSDiscoveryMediumsBLE = 2,

	kGNSDiscoveryMediumsDefault = 3
}

declare const enum GNSDiscoveryMode {

	kGNSDiscoveryModeBroadcast = 1,

	kGNSDiscoveryModeScan = 2,

	kGNSDiscoveryModeDefault = 3
}

declare class GNSMessage extends NSObject {

	static alloc(): GNSMessage; // inherited from NSObject

	static messageWithContent(content: NSData): GNSMessage;

	static messageWithContentType(content: NSData, type: string): GNSMessage;

	static new(): GNSMessage; // inherited from NSObject

	readonly content: NSData;

	readonly messageNamespace: string;

	readonly type: string;
}

declare class GNSMessageManager extends NSObject {

	static alloc(): GNSMessageManager; // inherited from NSObject

	static isDebugLoggingEnabled(): boolean;

	static new(): GNSMessageManager; // inherited from NSObject

	static setDebugLoggingEnabled(enabled: boolean): void;

	constructor(o: { APIKey: string; });

	constructor(o: { APIKey: string; paramsBlock: (p1: GNSMessageManagerParams) => void; });

	initWithAPIKey(apiKey: string): this;

	initWithAPIKeyParamsBlock(apiKey: string, paramsBlock: (p1: GNSMessageManagerParams) => void): this;

	publicationWithMessage(message: GNSMessage): GNSPublication;

	publicationWithMessageParamsBlock(message: GNSMessage, paramsBlock: (p1: GNSPublicationParams) => void): GNSPublication;

	subscriptionWithMessageFoundHandlerMessageLostHandler(messageFoundHandler: (p1: GNSMessage) => void, messageLostHandler: (p1: GNSMessage) => void): GNSSubscription;

	subscriptionWithMessageFoundHandlerMessageLostHandlerParamsBlock(messageFoundHandler: (p1: GNSMessage) => void, messageLostHandler: (p1: GNSMessage) => void, paramsBlock: (p1: GNSSubscriptionParams) => void): GNSSubscription;
}

declare class GNSMessageManagerParams extends NSObject {

	static alloc(): GNSMessageManagerParams; // inherited from NSObject

	static new(): GNSMessageManagerParams; // inherited from NSObject

	bluetoothPermissionErrorHandler: (p1: boolean) => void;

	bluetoothPowerErrorHandler: (p1: boolean) => void;

	microphonePermissionErrorHandler: (p1: boolean) => void;

	showBluetoothPowerAlert: boolean;

	useBestAudioSessionCategory: boolean;
}

declare const enum GNSOperationStatus {

	kGNSOperationStatusInactive = 0,

	kGNSOperationStatusStarting = 1,

	kGNSOperationStatusActive = 2
}

declare class GNSPermission extends NSObject {

	static alloc(): GNSPermission; // inherited from NSObject

	static isGranted(): boolean;

	static new(): GNSPermission; // inherited from NSObject

	static setGranted(granted: boolean): void;

	constructor(o: { changedHandler: (p1: boolean) => void; });

	initWithChangedHandler(changedHandler: (p1: boolean) => void): this;
}

interface GNSPublication extends NSObjectProtocol {
}
declare var GNSPublication: {

	prototype: GNSPublication;
};

declare class GNSPublicationParams extends NSObject implements NSCopying {

	static alloc(): GNSPublicationParams; // inherited from NSObject

	static new(): GNSPublicationParams; // inherited from NSObject

	permissionRequestHandler: (p1: (p1: boolean) => void) => void;

	statusHandler: (p1: GNSOperationStatus) => void;

	strategy: GNSStrategy;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GNSStrategy extends NSObject implements NSCopying {

	static alloc(): GNSStrategy; // inherited from NSObject

	static new(): GNSStrategy; // inherited from NSObject

	static strategy(): GNSStrategy;

	static strategyWithParamsBlock(paramsBlock: (p1: GNSStrategyParams) => void): GNSStrategy;

	readonly allowInBackground: boolean;

	readonly discoveryMediums: GNSDiscoveryMediums;

	readonly discoveryMode: GNSDiscoveryMode;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class GNSStrategyParams extends NSObject {

	static alloc(): GNSStrategyParams; // inherited from NSObject

	static new(): GNSStrategyParams; // inherited from NSObject

	allowInBackground: boolean;

	discoveryMediums: GNSDiscoveryMediums;

	discoveryMode: GNSDiscoveryMode;
}

interface GNSSubscription extends NSObjectProtocol {
}
declare var GNSSubscription: {

	prototype: GNSSubscription;
};

declare class GNSSubscriptionParams extends NSObject implements NSCopying {

	static alloc(): GNSSubscriptionParams; // inherited from NSObject

	static new(): GNSSubscriptionParams; // inherited from NSObject

	beaconStrategy: GNSBeaconStrategy;

	deviceTypesToDiscover: GNSDeviceTypes;

	messageNamespace: string;

	permissionRequestHandler: (p1: (p1: boolean) => void) => void;

	statusHandler: (p1: GNSOperationStatus) => void;

	strategy: GNSStrategy;

	type: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var kGNSMessageMaximumContentSize: number;

declare var kGNSMessageMaximumTypeLength: number;
