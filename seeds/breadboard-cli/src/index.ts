#!/usr/bin/env node

// Note: We might hit this bug - https://github.com/npm/cli/issues/4149

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { debug } from "./commands/debug.js";
import { mermaid } from "./commands/mermaid.js";
import { makeGraph } from "./commands/make-graph.js";
import { run } from "./commands/run.js";

import { program } from "commander";

program.version("0.0.1");

program
  .command("debug [file]")
  .description(
    "Starts a simple HTTP server that serves the breadboard-web app, and outputs a URL that contains a link to a breadboard file that the user provided."
  )
  .option(
    "-o, --output <path>",
    "If compiling a graph in Typescript (.ts), you MUST specific a location to output the compiled graph."
  )
  .option("-w, --watch", "Watch the file for changes.")
  .action(debug);

program
  .command("mermaid [file]")
  .description(
    "Watch a breadboard file and output the mermaid diagram when it changes."
  )
  .option(
    "-o, --output <path>",
    "If compiling a graph in Typescript (.ts), you MUST specific a location to output the compiled graph."
  )
  .option("-w, --watch", "Watch the file for changes.")
  .action(mermaid);

program
  .command("make [file]")
  .description(
    "Make a graph from a javascript file. Note:all the imports have to be resolvable from the current directory."
  )
  .option(
    "-o, --output <path>",
    "If compiling a graph in Typescript (.ts), you MUST specific a location to output the compiled graph."
  )
  .option("-w, --watch", "Watch the file for changes.")
  .action(makeGraph);

program
  .command("run [file]")
  .description("Run a graph.")
  .option("-w, --watch", "Watch the file for changes.")
  .option(
    "-o, --output <path>",
    "If compiling a graph in Typescript (.ts), you MUST specific a location to output the compiled graph."
  )
  .option("-k, --kit <kit...>", "The kit to use.")
  .option(
    "-i, --input <input>",
    "The JSON that represents the input to the graph."
  )
  .action(run);

program.parse();

// Allow developers to integrate with the CLI
export { debug, mermaid, makeGraph, run };
