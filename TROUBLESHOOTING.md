# Antigravity 터미널에서 Claude Code가 열리지 않는 문제 해결 가이드

## 문제 설명

cmd(명령 프롬프트)에서는 Claude Code가 정상적으로 열리지만, Google Antigravity 터미널에서는 열리지 않는 현상이 발생할 수 있습니다.

## 원인

1. **`code` 명령어 PATH 누락** — Claude CLI가 VS Code 확장 설치를 확인할 때 `code` 명령어를 실행하지만, Antigravity는 VS Code 포크이므로 `code`가 시스템 PATH에 없어 "Exit Code 1"로 실패합니다.
2. **IDE 감지 실패** — `TERM_PROGRAM` 환경변수가 VS Code 포크에서도 "vscode"로 설정되어 Antigravity를 정확히 인식하지 못합니다.
3. **확장 패널 호환성** — Antigravity 최신 버전에서 일부 VS Code API(`contribSecondarySidebar` 등)가 지원되지 않아 패널 로드가 실패할 수 있습니다.

## 해결 방법

### 방법 1: 터미널에서 CLI 직접 실행

확장 패널 대신 Antigravity 내장 터미널에서 직접 실행:

```bash
claude
```

### 방법 2: PATH 환경변수 확인

cmd에서는 되고 Antigravity에서 안 된다면 PATH가 다르게 설정되어 있을 수 있습니다:

```bash
which node
which claude
echo $PATH
```

### 방법 3: 키바인딩 수동 복사 (macOS)

```bash
cp ~/Library/Application\ Support/Code/User/keybindings.json \
   ~/Library/Application\ Support/Antigravity/User/keybindings.json
```

### 방법 4: cmd 또는 일반 터미널 사용

현재 가장 안정적인 방법은 cmd 또는 일반 터미널에서 Claude Code를 사용하는 것입니다.

## 관련 이슈

- https://github.com/anthropics/claude-code/issues/22360
- https://github.com/anthropics/claude-code/issues/15416
- https://github.com/anthropics/claude-code/issues/29336
- https://github.com/anthropics/claude-code/issues/33454
