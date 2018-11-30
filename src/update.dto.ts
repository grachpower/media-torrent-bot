

export interface Events {
}

export interface Options2 {
    keepAliveMsecs: number;
    keepAlive: boolean;
    path?: any;
}

export interface Requests {
}

export interface Sockets {
}

export interface Context {
}

export interface SecureContext {
    context: Context;
}

export interface TlsOptions {
    pipe: boolean;
    secureContext: SecureContext;
    isServer: boolean;
    requestCert: boolean;
    rejectUnauthorized: boolean;
}

export interface Events2 {
    close: any[];
}

export interface Parent {
    reading: boolean;
    onread?: any;
    onconnection?: any;
}

export interface Context2 {
}

export interface SecureContext2 {
    context: Context2;
}

export interface Handle {
    _parent: Parent;
    _secureContext: SecureContext2;
    reading: boolean;
}

export interface Buffer {
    head?: any;
    tail?: any;
    length: number;
}

export interface ReadableState {
    objectMode: boolean;
    highWaterMark: number;
    buffer: Buffer;
    length: number;
    pipes?: any;
    pipesCount: number;
    flowing: boolean;
    ended: boolean;
    endEmitted: boolean;
    reading: boolean;
    sync: boolean;
    needReadable: boolean;
    emittedReadable: boolean;
    readableListening: boolean;
    resumeScheduled: boolean;
    emitClose: boolean;
    destroyed: boolean;
    defaultEncoding: string;
    awaitDrain: number;
    readingMore: boolean;
    decoder?: any;
    encoding?: any;
}

export interface Next {
    next?: any;
    entry?: any;
}

export interface CorkedRequestsFree {
    next: Next;
    entry?: any;
}

export interface WritableState {
    objectMode: boolean;
    highWaterMark: number;
    finalCalled: boolean;
    needDrain: boolean;
    ending: boolean;
    ended: boolean;
    finished: boolean;
    destroyed: boolean;
    decodeStrings: boolean;
    defaultEncoding: string;
    length: number;
    writing: boolean;
    corked: number;
    sync: boolean;
    bufferProcessing: boolean;
    writecb?: any;
    writelen: number;
    bufferedRequest?: any;
    lastBufferedRequest?: any;
    pendingcb: number;
    prefinished: boolean;
    errorEmitted: boolean;
    emitClose: boolean;
    bufferedRequestCount: number;
    corkedRequestsFree: CorkedRequestsFree;
}

export interface Parent2 {
    reading: boolean;
    onread?: any;
    onconnection?: any;
}

export interface Context3 {
}

export interface SecureContext3 {
    context: Context3;
}

export interface Ssl {
    _parent: Parent2;
    _secureContext: SecureContext3;
    reading: boolean;
}

export interface ApiTelegramOrg443 {
    _tlsOptions: TlsOptions;
    _secureEstablished: boolean;
    _securePending: boolean;
    _newSessionPending: boolean;
    _controlReleased: boolean;
    _SNICallback?: any;
    servername: string;
    alpnProtocol: boolean;
    authorized: boolean;
    authorizationError?: any;
    encrypted: boolean;
    _events: Events2;
    _eventsCount: number;
    connecting: boolean;
    _hadError: boolean;
    _handle: Handle;
    _parent?: any;
    _host: string;
    _readableState: ReadableState;
    readable: boolean;
    domain?: any;
    _writableState: WritableState;
    writable: boolean;
    allowHalfOpen: boolean;
    _sockname?: any;
    _pendingData?: any;
    _pendingEncoding: string;
    _server?: any;
    ssl: Ssl;
    _requestCert: boolean;
    _rejectUnauthorized: boolean;
    parser?: any;
    _httpMessage?: any;
}

export interface ApiTelegramOrg4432 {
    type: string;
    data: number[];
}

export interface SessionCache {
    map: any;
    list: string[];
}

export interface Agent {
    domain?: any;
    _events: Events;
    _eventsCount: number;
    defaultPort: number;
    protocol: string;
    options: Options2;
    requests: Requests;
    sockets: Sockets;
    freeSockets: any;
    keepAliveMsecs: number;
    keepAlive: boolean;
    maxSockets?: any;
    maxFreeSockets: number;
    maxCachedSessions: number;
    _sessionCache: SessionCache;
}

export interface Options {
    apiRoot: string;
    webhookReply: boolean;
    agent: Agent;
}

export interface Tg {
    token: string;
    options: Options;
}

export interface From {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
    language_code: string;
}

export interface Chat {
    id: number;
    first_name: string;
    username: string;
    type: string;
}

export interface Entity {
    offset: number;
    length: number;
    type: string;
}

export interface Message {
    message_id: number;
    from: From;
    chat: Chat;
    date: number;
    text: string;
    entities: Entity[];
}

export interface Update {
    update_id: number;
    message: Message;
}

export interface Options3 {
    retryAfter: number;
    handlerTimeout: number;
}

export interface ContextState {
}

export interface Context {
    tg: Tg;
    update: Update;
    options: Options3;
    updateType: string;
    updateSubTypes: string[];
    contextState: ContextState;
}

